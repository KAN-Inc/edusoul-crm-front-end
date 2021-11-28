import Login from "./pages/Login";
import * as Styled from "./components/dashboard/card";
import * as Global from "./components/global";
function App() {
  return (
    <Global.Grid gap="30" columns="4">
      <Styled.Card>
        <Styled.CardTitle>
          <Global.Flexbox align="center">
            <Global.Text color="#ffffff70;" fontSize="20px">
              Students:
            </Global.Text>
            <Global.Text color="#ffffff;" fontSize="20px">
              30
            </Global.Text>
          </Global.Flexbox>
          <Styled.CardBadge>30</Styled.CardBadge>
        </Styled.CardTitle>
        <Styled.CardBody>
          <Global.Flexbox
            margin="2.5px 0"
            align="center"
            justify="space-between"
          >
            <Global.Text color="#14274E;" fontSize="20">
              Subject
            </Global.Text>
            <Global.Badge>English101</Global.Badge>
          </Global.Flexbox>
          <Global.Flexbox
            margin="2.5px 0"
            align="center"
            justify="space-between"
          >
            <Global.Text color="#14274E;" fontSize="20">
              Subject
            </Global.Text>
            <Global.Badge>English101</Global.Badge>
          </Global.Flexbox>
          <Global.Flexbox
            margin="2.5px 0"
            align="center"
            justify="space-between"
          >
            <Global.Text color="#14274E;" fontSize="20">
              Subject
            </Global.Text>
            <Global.Badge>English101</Global.Badge>
          </Global.Flexbox>
        </Styled.CardBody>
      </Styled.Card>
    </Global.Grid>
  );
}

export default App;
