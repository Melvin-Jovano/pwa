import { useEffect, useContext } from "react";
import AppContext from "../../common/context/AppContext";

function HomePage() {
  const { setShowBottomNavbar } = useContext(AppContext);

  useEffect(() => {
    setShowBottomNavbar(true);

    return function cleanup() {
      setShowBottomNavbar(false);
    };
  }, []);

  return (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias distinctio recusandae eum eveniet itaque dicta maiores laborum necessitatibus voluptates et. Minus a ab recusandae officiis veniam voluptas reprehenderit repellendus hic.
    </>
  );
}

export default HomePage
