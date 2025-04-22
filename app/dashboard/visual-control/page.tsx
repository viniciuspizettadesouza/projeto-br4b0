"use client";

import { useState } from "react";
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

const rowTitles = [
  "1 Revisão",
  "2 Revisões",
  "3 Revisões",
  "4 Revisões",
  "5 Revisões",
  "6 Revisões",
  "7 Revisões",
  "8 Revisões",
  "9 Revisões",
  "10 Revisões",
  "11 Revisões",
  "12 Revisões",
  "13 Revisões",
];

const columns = Object.keys(data);
const totalRows = rowTitles.length;

export default function VisualControlPage() {
  const [cellColors, setCellColors] = useState(
    Array.from({ length: totalRows }, () => Array.from({ length: columns.length }, () => 0))
  );

  const handleClick = (rowIndex: number, colIndex: number) => {
    setCellColors((prev) => {
      const newData = prev.map((row, i) =>
        row.map((cell, j) =>
          i === rowIndex && j === colIndex ? (cell + 1) % legendColors.length : cell
        )
      );
      return newData;
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Controle Visual</h1>

      <div className="overflow-x-auto border rounded">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border p-2">LEGENDA</th>
              {columns.map((title, i) => (
                <th key={i} className="border p-2 text-sm text-gray-700">
                  {title.replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: totalRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={`border p-2 font-medium whitespace-nowrap ${legendColors[rowIndex + 1]}`}
                >
                  {rowTitles[rowIndex]}
                </td>
                {columns.map((colKey, colIndex) => (
                  <td
                    key={colIndex}
                    className={`border p-2 ${
                      data[colKey][rowIndex]
                        ? `cursor-pointer ${legendColors[cellColors[rowIndex][colIndex]]}`
                        : "bg-gray-50 text-gray-400"
                    }`}
                    onClick={() => data[colKey][rowIndex] && handleClick(rowIndex, colIndex)}
                  >
                    {data[colKey][rowIndex] || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
