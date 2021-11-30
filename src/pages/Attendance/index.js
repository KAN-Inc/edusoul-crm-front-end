import data from "../../data/dataStudents";
import columns from "../../data/attendanceColumns";

import BaseTable from "../../components/BaseTable";
import NavBar from "../../components/NavBars/attendance";

import * as Styled from "../style";

const Students = (props) => {
  return (
    <Styled._>
      <NavBar title="Daily Attendance" group="B" studentSize="30" />
      <BaseTable data={data || []} columns={columns()} />
    </Styled._>
  );
};

export default Students;
