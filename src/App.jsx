import { useRoutes } from "react-router-dom";
import routes from "./route/route";

function App() {
  const routing = useRoutes(routes(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')));

  return (
      <>
        {routing}
      </>
  );
}

export default App
