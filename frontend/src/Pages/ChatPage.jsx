import React, {useEffect, useState} from 'react'
const axios = require("axios");

export const ChatPage = () => {

    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        const { data } = await axios.get("http://localhost:5000/api/chat/");
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, [])
    
    return (
        <div>
            {chats.map((chat) => (
                <div>{chat.chatName}</div>
            ))}
        </div>
    )
}
