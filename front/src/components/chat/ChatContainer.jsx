import React from "react";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";

const ChatContainer = () => {
	return (
		<div className="chat-container">
			<ChatHeader />
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
