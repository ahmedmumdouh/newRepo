import React from "react";
import {useState, useEffect} from 'react';
import postData from './helpers/fetch';

export default function LongPolling({}) {


    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        postData('http://localhost:3000/messages', {message}).then(()=> setMessage(''));
        
    };
    useEffect(()=>{
            console.log("get-react")
            fetch('http://localhost:3000/messages/subscribe')
                .then( (res) => res.json() )
                .then((data) => setMessages(messages.concat(data)) );
    },[messages]);




    return (
        <div className="container text-center">
        <div className="form-wrapper text-center">
             <form  id="form" className="validate" onSubmit={handleSubmit}>
                 <div className="form-field">
                    <label>Messages</label> 
                    <input className="form-control form-control-lg" type="text" id="message" name="message" value={message} onChange={ (e) => setMessage(e.target.value) } placeholder="Enter SMS" required />
                               
                </div>                      
             </form>
         </div>   

                <h2>Messages</h2>
                <table className="table table-dark table-striped mt-2">
        <thead>
          <tr>
            <th>
              messages
            </th>
          </tr>
        </thead>
        <tbody>
        {
            messages.map((n,i) => <tr key={i}> 
            <td>
                {n.message}
            </td>
            </tr>)
        }
        </tbody>
        
      </table>
                

            
            
                        
        </div>   
    );
}