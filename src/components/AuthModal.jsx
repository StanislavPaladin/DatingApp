import React from "react";

const AuthModal = ({ minimal, authToken, setShowModal }) => {
	const handleClick = () => {
		setShowModal(false);
	};

	const isSignUp = true;
	return (
		<div className="auth-modal">
			auth modal
			<div className="close-btn" onClick={handleClick}>
				x
			</div>
			<h2>{isSignUp ? "Sign Up" : "Create Account"}</h2>
			<p>
				By clicking Log In, you agree to our terms.
				Learn how we process your data in our Privacy
				Policy
			</p>
		</div>
	);
};

export default AuthModal;
