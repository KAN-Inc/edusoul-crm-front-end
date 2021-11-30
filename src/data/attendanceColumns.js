import { useMemo } from "react";

import * as Styled from "../components/TableUIComponents/style";

const Columns = () => {
  return useMemo(
    () => [
      {
        Header: () => <Styled.Header>Fullname</Styled.Header>,
        accessor: "firstName",
        Cell: ({ row }) => (
          <Styled._>
            <p>
              {row.original.firstName} {row.original.lastName}
            </p>
          </Styled._>
        ),
      },
      {
        Header: () => <Styled.Header>Status</Styled.Header>,
        accessor: "status",
        disableSortBy: true,
        Cell: ({ row }) => <Styled._>{row.original.status}</Styled._>,
      },
      {
        Header: () => <Styled.Header>Previous 7 days</Styled.Header>,
        accessor: "previousDays",
        disableSortBy: true,
        width: "30%",
        Cell: ({ row }) => <Styled._>{row.original.status}</Styled._>,
      },
    ],
    []
  );
};

export default Columns;
