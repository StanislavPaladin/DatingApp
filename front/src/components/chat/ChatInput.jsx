import axios from 'axios';
import React, { useState } from 'react';

const ChatInput = ({user, clickedUser, getUsersMessages, getClickedUsersMessages}) => {
    const [textArea, setTextArea] = useState('');

    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', {message})
            getClickedUsersMessages()
            setTextArea('')
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='chat-input'>
            <textarea value = {textArea} onChange={(e)=> setTextArea(e.target.value)}name="chat_textarea" id="chat_textarea" cols="30" rows="10"></textarea>
            <button className='secondary-button' onClick={addMessage}>Submit</button>
        </div>
    );
};

export default ChatInput;