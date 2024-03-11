import React, { useState, useEffect } from 'react';
import {Link,useParams,useLocation} from 'react-router-dom';
import axios from 'axios';
import * as api from '../apis/index';

const Messages = () => {
    const {reciever_id,sender_id}=useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    let { state } = useLocation();

    console.log("getting state",state);

    const sendername=state.senderName;



  
    useEffect(() => {
      const fetchMessages = async () => {
        try {
  
          const response = await api.getMessages({receiver_id:reciever_id,sender_id});

  
          setMessages(response.data.messages);
          console.log('resposne only',response);
          console.log('fetching userrs',response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching assignments:', error);
          setLoading(false);
        }
      };
  
      fetchMessages();
    }, []);



    const handleMessageSend = async() => {
      // Implement logic to send the new message
      console.log('Sending message:', newMessage);
      const sendMessage = await api.sendMessage({sender_id:reciever_id,reciever_id:sender_id,content:newMessage});
      // Clear the input field after sending the message
      console.log("getting send message data",sendMessage);
      setNewMessage('');
      // Reload the page after sending the message
      window.location.reload();
    };



  return (
    <div className="max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-4">Chat with {sendername}</h2>
    <div className="flex flex-col space-y-4">
      {messages.map((message) => (
        <div
          key={message._id}
          className={`flex ${message.sender == reciever_id ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`${
              message.sender == reciever_id
                ? 'bg-blue-500 text-white rounded-tl-xl rounded-bl-xl rounded-tr-xl py-2 px-4'
                : 'bg-gray-200 text-gray-800 rounded-tr-xl rounded-br-xl rounded-tl-xl py-2 px-4'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center py-4">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 rounded-l-full px-4 py-2 w-full"
        />
        <button
          onClick={handleMessageSend}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-full px-4 py-2 ml-2"
        >
          Send
        </button>
      </div>
  </div>
  )
}

export default Messages