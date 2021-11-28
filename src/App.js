import useWindowSize from "./utils/useWindowSize";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Card1 from "./components/DashboardCards/Card1";

function App() {
  const size = useWindowSize();

  return (
    <div>
      {size.width <= 1024 ? (
        "This app works in larger window size. (Open it on desktop)"
      ) : (
        // <Card1 />
        <Main />
      )}
    </div>
  );
}

export default App;
