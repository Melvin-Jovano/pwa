import { useRoutes } from "react-router-dom";
import routes from "./route/route";
import NavigationBar from "./component/NavigationBar";
import AppContext from "./common/context/AppContext";
import { useState } from "react";
import BottomNavigation from "./component/BottomNavigation";

function App() {
  const routing = useRoutes(routes(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')));
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBottomNavbar, setShowBottomNavbar] = useState(false);

  return (
      <>
        <AppContext.Provider
          value={{
            showNavbar,
            setShowNavbar,
            showBottomNavbar, 
            setShowBottomNavbar
          }}
        >
          {<NavigationBar />}

          <div className="p-3">
            {routing}
          </div>

          {<BottomNavigation />} 
        </AppContext.Provider>
      </>
  );
}

export default App
