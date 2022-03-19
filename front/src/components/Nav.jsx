import React, { useState } from "react";
import logo from "../images/logo-oval.svg";
const Nav = ({authToken, minimal, setShowModal, showModal, setIsSignUp }) => {

	const handleClick = () => {
		setShowModal(true);
    setIsSignUp(false);
	};
	return (
		<div className="nav">
			<div className="logo-container">
				<img
					className="logo"
					src={minimal ? logo : logo}
					alt=""
				/>
			</div>
			{!authToken && !minimal && (
				<button
					disabled={showModal}
					onClick={handleClick}
					className="nav-button"
				>
					Log in
				</button>
			)}
		</div>
	);
};

export default Nav;
