import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

function Login() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ UserName, Password });
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded shadow-md bg-white border border-gray-200 text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <h3 className="text-3xl font-semibold">Login</h3>

      <input
        className="w-64 px-3 py-2 rounded border border-gray-400 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
        type="text"
        placeholder="Username"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        className="w-64 px-3 py-2 rounded border border-gray-400 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
        type="password"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 rounded font-medium bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
