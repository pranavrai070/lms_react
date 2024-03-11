import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as api from '../apis/index';

const Discussion = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const reciever_id= localStorage.getItem('user_id');
    console.log("reciverid",reciever_id);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
  
          const response = await api.users();
  
          setUsers(response.data.users);
          console.log('resposne only',response);
          console.log('fetching userrs',response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching assignments:', error);
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <div className="max-w-md mx-auto">
    <h2 className="text-center text-2xl font-bold mb-4">Users</h2>
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold mb-2">{user.full_name}</h3>
            <div>
            <Link to={`/messages/${reciever_id}/${user.id}`} state={{ senderName:user.full_name }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
    View Messages
  </Link>
  {user.id == reciever_id && (
            <div className="w-2 h-2 bg-red-500 rounded-full ml-50"></div>
          )}
            </div>
            

          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Discussion;