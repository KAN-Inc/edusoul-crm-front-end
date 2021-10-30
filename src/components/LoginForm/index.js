import { useState } from "react";

import * as Styled from "./style";
import CompanyIcon from "../../assets/companyIcon.png";
import * as Icons from "../../constants/icons";

const LoginForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Styled._ attr="main">
      <Styled._ attr="icon">
        <img src={CompanyIcon} alt="" draggable="false" />
      </Styled._>
      <Styled._ attr="inputs">
        <Styled._ attr="username">
          <Styled._ attr="inputIcon">
            <Icons.UserIcon />
          </Styled._>
          <Styled.Input type="text" placeholder="example@mail.com" />
        </Styled._>
        <Styled._ attr="password">
          <Styled._ attr="inputIcon">
            <Icons.LockIcon />
          </Styled._>
          <Styled.Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
          />
          <Styled._
            attr="inputIcon"
            attr2="asButton"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icons.EyeIcon />
          </Styled._>
        </Styled._>
      </Styled._>
      <Styled._ attr="options">
        <Styled._ attr="checkbox">
          <Styled.Checkbox type="checkbox" id="rememberMe" />
          <Styled.Label attr="remember" for="rememberMe">
            Remember me
          </Styled.Label>
        </Styled._>
        <p>Forgot password?</p>
      </Styled._>
      <Styled.Button>Login</Styled.Button>
    </Styled._>
  );
};

export default LoginForm;
