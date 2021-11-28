import { useSortBy, useTable, useGlobalFilter } from "react-table";

export const useCustomTable = (columns, data) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const handleSort = (isSorted, isSortedDesc) => {
    if (isSorted) {
      return isSortedDesc ? "sort-desc" : "sort-asc";
    } else {
      return "";
    }
  };

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    rows,
    handleSort,
  };
};
