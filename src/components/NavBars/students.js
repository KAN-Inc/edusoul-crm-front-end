import Search from "../Search";
import Button from "../Button";

import * as Styled from "./style";

const Students = ({
  title,
  globalFilter,
  setGlobalFilter,
  searchPlaceholder,
}) => {
  return (
    <Styled._>
      <div>
        <Styled.Text>{title}</Styled.Text>
        <Search
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          searchPlaceholder={searchPlaceholder}
        />
      </div>
      <Button title="Students" />
    </Styled._>
  );
};

export default Students;
