import React, { useState } from "react";
import api from "../../shared/api/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../shared/api/constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const name = method === "login" ? "Login" : "Register";
  let message;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    try {
      const requestData = method === "login"
        ? { email, password }
        : { username, password, email, firstName, lastName, phoneNumber };

      const res = await api.post(route, requestData);
      console.log(res);
      
      
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/login");
      } else {
        navigate("/register");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (name === "Register") {
    message = (
      <div className="p-5 bg-stone-100 flex flex-col justify-center w-1/3">
        <p className="font-bold text-center text-xl pb-5">{name}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="First name"
              className="w-3/8 p-2 border-0 rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-3/8 p-2 border-0 rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="text"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md mt-5 w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4 text-center">
            Have you already account?{" "}
            <a
              href="/login"
              className="hover:underline hover:text-indigo-600 text-black"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    );
  } else if (name === "Login") {
    message = (
      <div className="p-5 bg-stone-100 flex flex-col justify-center w-1/3">
        <p className="font-bold text-center text-xl pb-5">{name}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="mt-3 border-0 rounded-md p-2 w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md mt-5 w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    );
  }

  return <>{message}</>;
}

export default Form;
