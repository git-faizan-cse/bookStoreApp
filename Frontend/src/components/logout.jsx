import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear user data from local storage
      localStorage.removeItem("user");

      //   toast.success("Logout successful!");
      // Update auth context

      setAuthUser(null);
      //   setAuthUser({
      //     ...authUser,
      //     user: null,
      //   });
      // Optionally, redirect to home or login page
      // window.location.reload();
      toast.success("Logout successful!");
      //   window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed! Please try again.");
    }
  };
  return (
    <div>
      <button className=" btn btn-soft btn-secondary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
