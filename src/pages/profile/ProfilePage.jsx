import { useContext } from "react";
import { logout } from "../../common/api/auth";
import AppContext from "../../common/context/AppContext";

function ProfilePage() {
  const { setShowLoading } = useContext(AppContext);

  async function logoutSubmit() {
    try {
      setShowLoading(true);
      await logout(localStorage.getItem('refreshToken'));
      setShowLoading(false);
      localStorage.clear();
      window.location.replace('/auth/login');
    } catch (error) {
      setShowLoading(false);
      localStorage.clear();
      window.location.replace('/auth/login');
    }
  }

  return (
    <div className="p-3">
      <button onClick={logoutSubmit} className="bg-primary text-white mb-6 w-full rounded-full py-2 mt-12">
        Sign Out
      </button>
    </div>
  );
}

export default ProfilePage
