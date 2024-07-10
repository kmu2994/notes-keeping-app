// header.jsx
import React from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import LogoutIcon from "@mui/icons-material/Logout";

function Header({ isLoggedIn, handleLogout, backendUrl }) {
  // Destructure props here
  const handleLogin = () => {
    window.open(backendUrl + "/auth/google", "_self");
  };

  return (
    <header>
      <h1>
        <StickyNote2Icon className="stickyNoteIcon" fontSize="large" /> Notes
        App
      </h1>
      <div className="googleSignIn">
        {isLoggedIn ? (
          <button className="btn btn-block btn-logout" onClick={handleLogout}>
            <LogoutIcon className="logoutIcon" />
            Log Out
          </button>
        ) : (
          <button
            className="btn btn-block btn-social btn-google"
            onClick={handleLogin}
          >
            <i className="fab fa-google"></i>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
