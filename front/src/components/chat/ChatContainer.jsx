import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";

const ChatContainer = ({user}) => {
	return (
		<div className="chat-container">
			<ChatHeader user={user}/>
			<div className="">
				<button className="option">matches</button>
				<button className="option">chats</button>
			</div>
			<MatchesDisplay />
			<ChatDisplay />
		</div>
	);
};

export default ChatContainer;
