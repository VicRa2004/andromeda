/**
 * Theme Provider Helper
 *
 * Simple utility to manage light/dark theme switching
 * Sets data-theme attribute on the document root element
 *
 * Usage:
 * import { ThemeProvider } from '@andromeda/css-framework/theme-provider'
 *
 * // Initialize theme on app load
 * ThemeProvider.init()
 *
 * // Get current theme
 * const currentTheme = ThemeProvider.getCurrentTheme() // 'light' | 'dark'
 *
 * // Set theme
 * ThemeProvider.setTheme('dark')
 *
 * // Toggle theme
 * ThemeProvider.toggleTheme()
 *
 * // Listen for theme changes
 * ThemeProvider.onThemeChange((theme) => {
 *   console.log('Theme changed to:', theme)
 * })
 */

const THEME_STORAGE_KEY = "andromeda-theme";
const THEME_ATTR = "data-theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

export const ThemeProvider = {
	/**
	 * Get the current theme from the DOM
	 * @returns {'light' | 'dark'} Current theme
	 */
	getCurrentTheme() {
		return document.documentElement.getAttribute(THEME_ATTR) || LIGHT_THEME;
	},

	/**
	 * Get the system preferred theme based on OS settings
	 * @returns {'light' | 'dark'} System preference
	 */
	getSystemTheme() {
		if (
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return DARK_THEME;
		}
		return LIGHT_THEME;
	},

	/**
	 * Get the saved theme preference from localStorage
	 * @returns {'light' | 'dark' | null} Saved theme or null if not set
	 */
	getSavedTheme() {
		if (typeof localStorage === "undefined") return null;
		return localStorage.getItem(THEME_STORAGE_KEY);
	},

	/**
	 * Set the theme and persist to localStorage
	 * @param {'light' | 'dark'} theme - Theme to set
	 */
	setTheme(theme) {
		if (![LIGHT_THEME, DARK_THEME].includes(theme)) {
			console.warn(`Invalid theme: ${theme}. Using 'light'.`);
			theme = LIGHT_THEME;
		}

		document.documentElement.setAttribute(THEME_ATTR, theme);

		// Persist to localStorage
		if (typeof localStorage !== "undefined") {
			localStorage.setItem(THEME_STORAGE_KEY, theme);
		}

		// Dispatch custom event for theme change listeners
		window.dispatchEvent(
			new CustomEvent("theme-change", {
				detail: { theme },
			}),
		);
	},

	/**
	 * Toggle between light and dark themes
	 */
	toggleTheme() {
		const current = this.getCurrentTheme();
		const newTheme = current === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
		this.setTheme(newTheme);
	},

	/**
	 * Initialize theme on app startup
	 * Priority: saved preference > system preference > light (default)
	 */
	init() {
		const savedTheme = this.getSavedTheme();

		if (savedTheme) {
			this.setTheme(savedTheme);
		} else {
			const systemTheme = this.getSystemTheme();
			this.setTheme(systemTheme);
		}

		// Listen for system theme changes
		if (typeof window !== "undefined" && window.matchMedia) {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", (e) => {
					// Only auto-switch if user hasn't manually set a theme
					if (!this.getSavedTheme()) {
						this.setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
					}
				});
		}
	},

	/**
	 * Listen for theme changes
	 * @param {Function} callback - Function called with { theme } when theme changes
	 * @returns {Function} Unsubscribe function
	 */
	onThemeChange(callback) {
		const handler = (event) => {
			callback(event.detail.theme);
		};

		window.addEventListener("theme-change", handler);

		// Return unsubscribe function
		return () => {
			window.removeEventListener("theme-change", handler);
		};
	},

	/**
	 * Clear saved theme preference and reset to system default
	 */
	reset() {
		if (typeof localStorage !== "undefined") {
			localStorage.removeItem(THEME_STORAGE_KEY);
		}
		this.setTheme(this.getSystemTheme());
	},
};

// Auto-initialize on module load if in browser environment
if (typeof window !== "undefined" && document.readyState !== "loading") {
	ThemeProvider.init();
} else if (typeof window !== "undefined") {
	document.addEventListener("DOMContentLoaded", () => {
		ThemeProvider.init();
	});
}
