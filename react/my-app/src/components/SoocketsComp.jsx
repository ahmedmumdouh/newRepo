import React from "react";
import {useState , useEffect , useMemo } from 'react';
import io from 'socket.io-client';
import { Widget , addResponseMessage } from 'react-chat-widget';
import postData from './helpers/fetch';
import 'react-chat-widget/lib/styles.css';

const BASE_URL = 'http://localhost:3000';
const socket = io(BASE_URL);

export default function SoocketsComp ({}){
    const handleNewUserMessage = (message) =>{
        socket.emit('message', message);
    }
    useEffect(()=>{
        socket.on('new-message',(data)=>{
            addResponseMessage(data);
        });
    },[]);

    return (
        <>
    
         <Widget handleNewUserMessage={handleNewUserMessage} />
        </>
    );
    

}