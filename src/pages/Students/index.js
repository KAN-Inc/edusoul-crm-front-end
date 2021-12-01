import { useState } from "react";

import data from "../../data/dataStudents";
import columns from "../../data/studentsColumns";

import BaseTable from "../../components/BaseTable";
import NavBar from "../../components/NavBars/students";

import * as Styled from "../style";

const Students = (props) => {
  const [globalFilter, setGlobalFilter] = useState();

  return (
    <Styled._>
      <NavBar
        title="Students"
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        searchPlaceholder="Search by Name"
      />
      <BaseTable
        data={data || []}
        columns={columns()}
        searchValue={globalFilter}
      />
    </Styled._>
  );
};

export default Students;
