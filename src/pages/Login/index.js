import * as Styled from "./style";

import LoginForm from "../../components/LoginForm/index";

import LoginImg from "../../assets/loginImg.png";

const Login = (props) => {
  return (
    <Styled._ attr="main">
      <Styled._ attr="leftSide">
        <LoginForm />
      </Styled._>
      <Styled._ attr="rightSide">
        <img src={LoginImg} alt="" draggable="false" />
      </Styled._>
    </Styled._>
  );
};

export default Login;
