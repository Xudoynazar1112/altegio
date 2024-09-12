import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../shared/api/constants";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN); // Check for token in localStorage

    if (token) {
      setIsAuthenticated(true); // Set state as authenticated if token exists
    } else {
      navigate('/'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <header className="container fixed">
      <nav className="w-full h-20 bg-gradient-to-b from-white p-5 flex flex-cols justify-between items-center px-20">
        <ul className="flex gap-4 text-lg">
          <li><a href="/"><img src="/images/logo.svg" alt="logo" className="w-28" /></a></li>
          <li><a href="/pricing">Narxlar</a></li>
          <li><a href="/about">Biz haqida</a></li>
        </ul>
        {isAuthenticated ? (
          <a href="/profile">Profile</a>
        ) : (
          <ul className="flex gap-5">
            <li><a href="/register" className="hover:bg-yellow-400 hover:underline hover:rounded hover:transition ease duration-300 py-1 px-5">Ro'yxatdan o'tish</a></li>
            <li><a href="/login">Hisobga kirish</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
