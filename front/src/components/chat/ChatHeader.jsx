import React from 'react';

const ChatHeader = () => {
    return (
        <div className='chat-container-header'>
            <div className="profile">
                <div className="image-container">
                    <img src="" alt="picture" />
                </div>
                <h3>UserName</h3>
            </div>
            <i className='log-out-icon'>&lt;-</i>
        </div>
    );
};

export default ChatHeader;