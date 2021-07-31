import React from "react";
import contacts from "../contacts.csv";

export const App = () => (
  <div className="max-w-6xl px-8 py-8">
    <h1 className="text-3xl text-center m-4">CSV Data</h1>
    <table className="shadow-lg bg-white w-full">
      <thead>
        <tr>
          {Object.keys((contacts as Object[])[0]).map((h) => (
            <td
              key={h}
              className="bg-blue-100 border text-left px-8 py-4 font-bold uppercase"
            >
              {h}
            </td>
          ))}
        </tr>
      </thead>
      {(contacts as Object[]).map((dt, i) => (
        <tr key={i}>
          {Object.values(dt).map((k, kIndex) => (
            <td key={kIndex} className="border px-8 py-4">
              <span className="">{k}</span>
            </td>
          ))}
        </tr>
      ))}
    </table>
  </div>
);
