import * as Styled from "./style";

import LeftBar from "../../components/LeftBar";
import TopBar from "../../components/TopBar";
import Students from "../Students";
import Attendance from "../Attendance";

const Main = (props) => {
  return (
    <Styled._ attr="main">
      <LeftBar />
      <Styled._ attr="center">
        <TopBar />
        <Styled._ attr="content">
          <div>
            <Attendance />
          </div>
        </Styled._>
      </Styled._>
    </Styled._>
  );
};

export default Main;
