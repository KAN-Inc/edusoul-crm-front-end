import Search from "../Search";
import Button from "../Button";

import * as Styled from "./style";

const Students = ({ title, group, studentSize }) => {
  return (
    <Styled._>
      <div>
        <Styled.Text>{title}</Styled.Text>
        <Styled.Text>Group: {group}</Styled.Text>
        <Styled.Text>Students: {studentSize}</Styled.Text>
        <Styled.Input type="date" />
      </div>
    </Styled._>
  );
};

export default Students;
