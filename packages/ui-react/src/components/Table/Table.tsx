import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
	hoverable?: boolean;
	striped?: boolean;
	variant?: "default" | "primary" | "secondary";
	containerClassName?: string;
}

export const Table = ({
	hoverable,
	striped,
	variant = "default",
	className = "",
	containerClassName = "",
	children,
	...props
}: TableProps) => {
	const tableClasses = [
		"table",
		hoverable ? "table--hoverable" : "",
		striped ? "table--striped" : "",
		variant !== "default" ? `table--${variant}` : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			className={["table-container", containerClassName]
				.filter(Boolean)
				.join(" ")}
		>
			<table className={tableClasses} {...props}>
				{children}
			</table>
		</div>
	);
};

export const TableHead = ({
	className = "",
	...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
	<thead
		className={["table__head", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const TableBody = ({
	className = "",
	...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
	<tbody
		className={["table__body", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const TableRow = ({
	className = "",
	...props
}: HTMLAttributes<HTMLTableRowElement>) => (
	<tr
		className={["table__row", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const TableHeadCell = ({
	className = "",
	...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
	<th
		className={["table__head-cell", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

export const TableCell = ({
	className = "",
	...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
	<td
		className={["table__cell", className].filter(Boolean).join(" ")}
		{...props}
	/>
);

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeadCell = TableHeadCell;
Table.Cell = TableCell;
