import React from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clears local storage
    navigate("/"); // Use navigate to redirect the user
  };

  return (
    <>
      <div>Profile</div>
      {/* onClick should call a function */}
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Profile;
