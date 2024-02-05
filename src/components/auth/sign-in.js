



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from "../../apis/index"

const dummyUser = {
  userId: 'user',
  password: 'user',
};

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
  //   console.log('handle clicked');
  //   const formData = {
  //     in_login_id:"animesh070",
  //     in_password:"12345"

  // }

  // const response = api.signIn(formData)
  // console.log(response, "ok")
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="font-bold mb-4" style={{fontSize:'30px'}}>Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700">User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
        {error && <p style={{ color: 'red' }} className="mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;
