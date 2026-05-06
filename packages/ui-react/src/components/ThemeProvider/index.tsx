import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	defaultTheme = "system",
	storageKey = "andromeda-ui-theme",
}) => {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window === "undefined") return defaultTheme;
		const storedTheme = localStorage.getItem(storageKey) as Theme | null;
		return storedTheme || defaultTheme;
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const root = window.document.documentElement;
		root.classList.remove("light", "dark");
		root.removeAttribute("data-theme");

		const applyTheme =
			theme === "system"
				? window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
				: theme;

		root.classList.add(applyTheme);
		root.setAttribute("data-theme", applyTheme);
	}, [theme]);

	const setTheme = (newTheme: Theme) => {
		if (typeof window !== "undefined") {
			localStorage.setItem(storageKey, newTheme);
		}
		setThemeState(newTheme);
	};

	const toggleTheme = () => {
		let nextTheme: Theme = theme;
		if (theme === "system") {
			nextTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
				? "light"
				: "dark";
		} else {
			nextTheme = theme === "light" ? "dark" : "light";
		}
		setTheme(nextTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
