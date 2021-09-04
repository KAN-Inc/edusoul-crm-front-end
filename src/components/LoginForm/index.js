import * as Styled from "./style";
import CompanyIcon from "../../assets/companyIcon.png";

const LoginForm = (props) => {
  return (
    <Styled._ attr="main">
      <Styled._ attr="icon">
        <img src={CompanyIcon} alt="" draggable="false" />
      </Styled._>
      <Styled._ attr="inputs"></Styled._>
      <Styled._ attr="options"></Styled._>
      <Button></Button>
    </Styled._>
  );
};

export default LoginForm;
