import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { userAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
function App() {
  const { isCheckingAuth, authUser, checkAuth } = userAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className='loading loading-ring w-[50px]'></span>
      </div>
    );
  }
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path='/signup'
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path='/login'
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route path='/settings' element={<SettingsPage />} />
        <Route
          path='/profile'
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
