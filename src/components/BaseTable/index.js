import { useEffect } from "react";
import { useCustomTable } from "./useCustomTable";

import TableBody from "./TableBody/index";

import * as Styled from "./style";

const BaseTable = ({ data, columns, searchValue }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
    handleSort,
  } = useCustomTable(columns, data);

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);

  return (
    <Styled._>
      <TableBody
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        handleSort={handleSort}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
    </Styled._>
  );
};

export default BaseTable;
