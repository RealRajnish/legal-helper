import React from "react";

const Table = ({ input1, input2 }) => {
  const rows = [];
  for (let i = 1; i <= input2; i++) {
    rows.push(
      <tr key={i}>
        <td className="text-red-600 ">
          {input1} * {i} = {i * input1}
        </td>
      </tr>
    );
  }

  return (
    <>
      <div>Table</div>
      {rows.map((elem, key) => elem)}
    </>
  );
};

export default Table;
