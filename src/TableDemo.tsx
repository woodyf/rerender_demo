import { ChangeEvent, useState } from "react";
import produce from "immer";
import { useTable, Row } from "react-table";

interface Data {
  id: number;
  name: string;
}

const initData: Data[] = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const columns = [
  {
    id: "id",
    Cell: (props: { row: Row<Data> }) => {
      const { row } = props;
      for (let i = 1; i < 50000; i++) {
        localStorage.getItem("i");
      }
      return row.original.id;
    },
  },
  {
    id: "name",
    Cell: (props: {
      row: Row<Data>;
      onChangeOfThisId: (
        id: number
      ) => (e: ChangeEvent<HTMLInputElement>) => void;
    }) => {
      const { row, onChangeOfThisId } = props;
      for (let i = 1; i < 50000; i++) {
        localStorage.getItem("i");
      }
      return (
        <input
          value={row.original.name}
          onChange={onChangeOfThisId(row.original.id)}
        />
      );
    },
  },
];

const TableDemo = () => {
  const [state, setState] = useState(initData);
  const onChangeOfThisId =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      setState((s) =>
        produce(s, (draft) => {
          const target = draft.find((item) => item.id === id);
          if (target) {
            target.name = e.target.value;
          }
        })
      );
    };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: state, onChangeOfThisId });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TableDemo;
