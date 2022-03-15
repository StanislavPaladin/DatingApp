import React from "react";
import logo from "../images/logo-oval.svg";
const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
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
			{!authToken && (
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
