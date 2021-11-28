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
        Header: () => <Styled.Header>Courses</Styled.Header>,
        accessor: "courses",
        disableSortBy: true,
        Cell: ({ row }) => <Styled._>{row.original.courses}</Styled._>,
      },
      {
        Header: () => <Styled.Header>Group</Styled.Header>,
        accessor: "group",
        disableSortBy: true,
        Cell: ({ row }) => <Styled._>{row.original.group}</Styled._>,
      },
      {
        Header: () => <Styled.Header>Start Date</Styled.Header>,
        accessor: "startDate",
        disableSortBy: true,
        Cell: ({ row }) => <Styled._>{row.original.startDate}</Styled._>,
      },
      {
        Header: () => <Styled.Header>Phone Number</Styled.Header>,
        accessor: "phoneNumber",
        disableSortBy: true,
        Cell: ({ row }) => <Styled._>{row.original.phoneNumber}</Styled._>,
      },
      {
        Header: () => <Styled.Header>Attendance</Styled.Header>,
        accessor: "attendance",
        disableSortBy: true,
        width: "10%",
        Cell: ({ row }) => <Styled._>{row.original.attendance}</Styled._>,
      },
    ],
    []
  );
};

export default Columns;
