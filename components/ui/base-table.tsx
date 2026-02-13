import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";

interface BaseTableProps<TData> {
  //제네릭 타입
  data: TData[];
  columns: ColumnDef<TData, any>[];
}

const BaseTable = <TData,>({ data, columns }: BaseTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    table.getHeaderGroups().map((group) => {
      group.headers.map((header) => console.log("헤더 :", header));
    });

    console.log(table.getRowModel().rows.map);

    console.log();
  }, [table]);
  return (
    <div>
      <table className="w-full bg-(--surface) ">
        <thead>
          {table.getHeaderGroups().map((group) => {
            return (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-start px-3 bg-gray-100 py-2 text-sm font-normal text-(--text-primary)"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={`tbody-row-${row.id}`}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={`cell-${cell.id}`} className="text-sm py-3 px-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
