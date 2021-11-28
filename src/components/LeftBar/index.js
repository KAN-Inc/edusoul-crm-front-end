import * as Styled from "./style";

import LeftTab from "../LeftTab";
import * as Icons from "../../constants/icons";
import CompanyIcon from "../../assets/companyIcon.png";

const data = [
  {
    title: "Dashboard",
    icon: <Icons.HomeIcon width="25px" height="25px" />,
  },
  {
    title: "Students",
    icon: <Icons.StudentsIcon width="25px" height="25px" />,
  },
  {
    title: "Attendance",
    icon: <Icons.AttendanceIcon width="25px" height="25px" />,
  },
];

const LeftBar = (props) => {
  return (
    <Styled._ attr="main">
      <Styled._ attr="image">
        <img src={CompanyIcon} alt="Company Icon" />
      </Styled._>
      <Styled._ attr="tabs">
        {data.map((item, key) => (
          <LeftTab title={item.title} icon={item.icon} key={key} />
        ))}
      </Styled._>
    </Styled._>
  );
};

export default LeftBar;
