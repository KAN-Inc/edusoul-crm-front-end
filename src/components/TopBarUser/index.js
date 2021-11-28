import * as Styled from "./style";

import * as Icons from "../../constants/icons";

const TopBarUser = (props) => {
  return (
    <Styled._ attr="main">
      <Icons.NotificationIcon width="25px" height="25px" />
      <p>Nodirbek Vositov</p>
      <Icons.ProfileIcon width="40px" height="40px" />
      <Icons.ArrowDownIcon />
    </Styled._>
  );
};

export default TopBarUser;
