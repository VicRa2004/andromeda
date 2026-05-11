import React, { useState, useRef, DragEvent, ChangeEvent } from "react";

export interface FileUploadProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Accepted file types (e.g. "image/*, .pdf") */
	accept?: string;
	/** Whether multiple files can be uploaded */
	multiple?: boolean;
	/** Callback when files are selected or dropped */
	onChange?: (files: File[]) => void;
	/** Maximum file size in bytes */
	maxSize?: number;
}

/**
 * FileUpload component for drag and drop file selection
 *
 * @example
 * <FileUpload accept="image/*" multiple onChange={(files) => console.log(files)} />
 */
export const FileUpload = ({
	accept,
	multiple = false,
	onChange,
	maxSize,
	className = "",
	...props
}: FileUploadProps) => {
	const [isDragActive, setIsDragActive] = useState(false);
	const [files, setFiles] = useState<File[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(true);
	};

	const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(false);
	};

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (!isDragActive) {
			setIsDragActive(true);
		}
	};

	const processFiles = (newFiles: FileList | null) => {
		if (!newFiles || newFiles.length === 0) return;

		let validFiles = Array.from(newFiles);

		if (maxSize) {
			validFiles = validFiles.filter((file) => file.size <= maxSize);
		}

		if (!multiple && validFiles.length > 0) {
			validFiles = [validFiles[0]];
		}

		if (validFiles.length > 0) {
			const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
			setFiles(updatedFiles);
			if (onChange) {
				onChange(updatedFiles);
			}
		}
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			processFiles(e.dataTransfer.files);
			e.dataTransfer.clearData();
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		processFiles(e.target.files);
		// Reset input value to allow selecting the same file again
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	const removeFile = (indexToRemove: number) => {
		const updatedFiles = files.filter((_, index) => index !== indexToRemove);
		setFiles(updatedFiles);
		if (onChange) {
			onChange(updatedFiles);
		}
	};

	const formatSize = (bytes: number) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const sizes = ["Bytes", "KB", "MB", "GB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
	};

	const baseClass = "file-upload";
	const classes = [baseClass, className].filter(Boolean).join(" ");
	const dropzoneClass = `${baseClass}__dropzone ${isDragActive ? "is-drag-active" : ""}`;

	return (
		<div className={classes} {...props}>
			<div
				className={dropzoneClass}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
			>
				<input
					ref={inputRef}
					type="file"
					accept={accept}
					multiple={multiple}
					onChange={handleChange}
					className={`${baseClass}__input`}
					aria-label="File upload"
				/>
				<svg
					className={`${baseClass}__icon`}
					width="48"
					height="48"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="17 8 12 3 7 8"></polyline>
					<line x1="12" y1="3" x2="12" y2="15"></line>
				</svg>
				<p className={`${baseClass}__text`}>
					<strong>Click to upload</strong> or drag and drop
				</p>
				<p className={`${baseClass}__hint`}>
					{accept ? `Supports: ${accept}` : "All files supported"}
					{maxSize && ` (Max: ${formatSize(maxSize)})`}
				</p>
			</div>

			{files.length > 0 && (
				<div className={`${baseClass}__preview-list`}>
					{files.map((file, index) => (
						<div
							key={`${file.name}-${index}`}
							className={`${baseClass}__preview-item`}
						>
							<div className={`${baseClass}__file-info`}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									style={{ color: "var(--ds-color-primary)", flexShrink: 0 }}
								>
									<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
									<polyline points="13 2 13 9 20 9"></polyline>
								</svg>
								<div style={{ overflow: "hidden" }}>
									<div className={`${baseClass}__file-name`}>{file.name}</div>
									<div className={`${baseClass}__file-size`}>
										{formatSize(file.size)}
									</div>
								</div>
							</div>
							<button
								type="button"
								className={`${baseClass}__remove`}
								onClick={() => removeFile(index)}
								aria-label={`Remove ${file.name}`}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
