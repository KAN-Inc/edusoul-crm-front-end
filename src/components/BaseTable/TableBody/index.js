import * as Styled from "./style";

const TableBody = ({
                       getTableProps,
                       headerGroups,
                       handleSort,
                       getTableBodyProps,
                       rows,
                       prepareRow,
                       cellAction
                   }) => {
    return (
        <Styled.Table {...getTableProps()} style={{width: "100%"}}>
            <Styled.THead>
                {headerGroups.map((headerGroup) => (
                    <Styled.Trow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Styled.Thead
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                width={column.width}
                                className={handleSort}
                            >
                                {column.render("Header")}
                            </Styled.Thead>
                        ))}
                    </Styled.Trow>
                ))}
            </Styled.THead>
            <Styled.TBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <Styled.Trow {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <Styled.Tdetail {...cell.getCellProps()}>
                                        {cell.render("Cell", {onClick: cellAction})}
                                    </Styled.Tdetail>
                                );
                            })}
                        </Styled.Trow>
                    );
                })}
            </Styled.TBody>
        </Styled.Table>
    );
};

export default TableBody;
