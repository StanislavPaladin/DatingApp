import React, { useState } from 'react';

const ChatInput = () => {
    const [textArea, setTextArea] = useState('');
    return (
        <div className='chat-input'>
            <textarea value = {textArea} onChange={(e)=> setTextArea(e.target.value)}name="chat_textarea" id="chat_textarea" cols="30" rows="10"></textarea>
            <button className='secondary-button'>Submit</button>
        </div>
    );
};

export default ChatInput;