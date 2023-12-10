import { logout } from "../../common/api/auth";

function ProfilePage() {
  async function logoutSubmit() {
    try {
      await logout(localStorage.getItem('refreshToken'));
      localStorage.clear();
      window.location.replace('/auth/login');
    } catch (error) {
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
