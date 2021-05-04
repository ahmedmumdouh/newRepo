import { useEffect, useState } from 'react';
import { addResponseMessage, Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

export default function WebSocketsRooms(props){
  const [group, setGroup] = useState('');
  const handleNewUserMessage = (newMessage) => {
    socket.emit("messageToRoom", {group, newMessage});
  };
  useEffect(()=>{
    socket.on("newSpecificGroupMessage", (data) => {
      addResponseMessage(data);
    });
  },[]);
  const addGroup = (e)=>{
    e.preventDefault();
    socket.emit("subscribeToRoom", group);
  }
  return(
    <div>
      <div className='container mt-3 p-3'>
        <form onSubmit={addGroup}>
          <div className='d-flex'>
            <div className="col-8">
            <input
                type="text"
                name="group-name"
                id="group-name"
                className="form-control"
                placeholder="Enter group name you want to join"
                required
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary">Join group</button>
            </div>
          </div>
        </form>
      </div>
      <Widget handleNewUserMessage={handleNewUserMessage}/>
    </div>
  )
};

