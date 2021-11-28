import * as Styled from "./style";

const LeftTab = (props) => {
  return (
    <Styled._ attr="main">
      {props.icon}
      <p>{props.title}</p>
    </Styled._>
  );
};

export default LeftTab;
