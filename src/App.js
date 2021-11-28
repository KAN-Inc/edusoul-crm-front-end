import Login from "./pages/Login";
import Main from "./pages/Main";

import useWindowSize from "./utils/useWindowSize";

function App() {
  const size = useWindowSize();

  return (
    <div>
      {size.width <= 1024 ? (
        "This app works in larger window size. (Open it on desktop)"
      ) : (
        <Main />
      )}
    </div>
  );
}

export default App;
