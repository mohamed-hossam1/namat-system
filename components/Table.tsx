import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  header?: ReactNode;
}

export default function Table({ children, header }: TableProps) {
  return (
    <div className="bg-card rounded-2xl w-full border border-border overflow-hidden">
      {header && (
        <div className="bg-input p-5 flex justify-around ">{header}</div>
      )}
      <table className="w-full">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
