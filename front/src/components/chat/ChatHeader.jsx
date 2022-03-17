import React from 'react';
import { useCookies } from "react-cookie";
const ChatHeader = ({user}) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const logout = () => {
        removeCookie('userId', cookies.userId)
        removeCookie('authToken', cookies.authToken)
        window.location.reload()
    }

    return (
        <div className='chat-container-header'>
            <div className="profile">
                <div className="image-container">
                    <img src={user.url} alt="user-pic" />
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className='log-out-icon' onClick={logout}>&lt;-</i>
        </div>
    );
};

export default ChatHeader;