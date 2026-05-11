import {
	createContext,
	useState,
	useCallback,
	useMemo,
	type ReactNode,
} from "react";
import { Toast, ToastContainer } from "./Toast";

export interface ToastMessage {
	id: string;
	title?: ReactNode;
	description?: ReactNode;
	duration?: number;
	variant?: "default" | "error" | "success" | "warning" | "info";
}

export interface ToastContextValue {
	toasts: ToastMessage[];
	toast: (message: Omit<ToastMessage, "id">) => void;
	dismiss: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export interface ToastProviderProps {
	children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastMessage[]>([]);

	const dismiss = useCallback((id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const toast = useCallback(
		({
			title,
			description,
			duration = 3000,
			variant = "default",
		}: Omit<ToastMessage, "id">) => {
			const id = Math.random().toString(36).substring(2, 9);
			setToasts((prev) => [
				...prev,
				{ id, title, description, duration, variant },
			]);

			if (duration > 0) {
				setTimeout(() => {
					dismiss(id);
				}, duration);
			}
		},
		[dismiss],
	);

	const value = useMemo(
		() => ({
			toasts,
			toast,
			dismiss,
		}),
		[toasts, toast, dismiss],
	);

	return (
		<ToastContext.Provider value={value}>
			{children}
			<ToastContainer>
				{toasts.map((t) => (
					<Toast
						key={t.id}
						title={t.title}
						description={t.description}
						variant={t.variant}
						onClose={() => dismiss(t.id)}
					/>
				))}
			</ToastContainer>
		</ToastContext.Provider>
	);
};
