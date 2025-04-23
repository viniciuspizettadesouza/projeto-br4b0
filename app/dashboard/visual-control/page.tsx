"use client";

import { useState, useMemo } from "react";
import { data } from "@/app/dashboard/visual-control/utils";

const legendColors = [
  "bg-white",
  "bg-blue-200",
  "bg-blue-400",
  "bg-blue-600 text-white",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600 text-white",
  "bg-yellow-200",
  "bg-yellow-400",
  "bg-yellow-600",
  "bg-purple-200",
  "bg-purple-400",
  "bg-purple-600 text-white",
  "bg-red-400 text-white",
  "bg-red-600 text-white",
  "bg-red-800 text-white",
];

const rowTitles = Array.from({ length: legendColors.length - 1 }, (_, i) =>
  i + 1 === 1 ? "1 Revisão" : `${i + 1} Revisões`
);

export default function VisualControlPage() {
  const columns = useMemo(() => Object.keys(data), []);
  const totalRows = rowTitles.length;

  const initialColors = useMemo(
    () => Array.from({ length: totalRows }, () => Array(columns.length).fill(0)),
    [columns.length, totalRows]
  );

  const [cellColors, setCellColors] = useState(initialColors);

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (!data[columns[colIndex]][rowIndex]) return;

    setCellColors((prev) =>
      prev.map((row, i) =>
        i === rowIndex
          ? row.map((cell, j) => (j === colIndex ? (cell + 1) % legendColors.length : cell))
          : row
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Controle Visual</h1>

      <div className="overflow-x-auto border rounded">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border p-2">LEGENDA</th>
              {columns.map((title) => (
                <th key={title} className="border p-2 text-sm text-gray-700">
                  {title.replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowTitles.map((label, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={`border p-2 font-medium whitespace-nowrap ${legendColors[rowIndex + 1]}`}
                >
                  {label}
                </td>
                {columns.map((colKey, colIndex) => {
                  const cellValue = data[colKey][rowIndex];
                  const colorClass = legendColors[cellColors[rowIndex][colIndex]];
                  const clickable = !!cellValue;

                  return (
                    <td
                      key={colIndex}
                      className={`border p-2 ${
                        clickable ? `cursor-pointer ${colorClass}` : "bg-gray-50 text-gray-400"
                      }`}
                      onClick={() => clickable && handleClick(rowIndex, colIndex)}
                    >
                      {cellValue || ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
