import React, { useState } from "react";

const AuthModal = ({setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    console.log(isSignUp);

	const handleClick = () => {
		setShowModal(false);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
        try {
            if (!email) {
                setError('Enter your email here')
            }
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match')
            }
            console.log('make a post request to our database');
        }
        catch(error) {
            console.log(error);
        }
	};


	return (
		<div className="auth-modal">
			<div className="close-btn" onClick={handleClick}>
				x
			</div>
			<h2>{!isSignUp ? "Sign Up" : "Create Account"}</h2>
			<p>
				By clicking Log In, you agree to our terms.
				Learn how we process your data in our Privacy
				Policy
			</p>
			<form action="" onSubmit={handleSubmit} className="auth-form">
				<input
                    className="auth-input"
					type="email"
					id="email"
					name="email"
					placeholder="enteryouremail@gmail.com"
                    required={true}
                    onChange={(e)=> setEmail(e.target.value)}
				/>
                <input
                    className="auth-input"
					type="password"
					id="password"
					name="password"
					placeholder="enter your password here"
                    required={true}
                    onChange={(e)=> setPassword(e.target.value)}
				/>
                {isSignUp && <input
                    className="auth-input"
					type="password"
					id="password-confirm"
					name="password-confirm"
					placeholder="confirm your password"
                    required={true}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
				/>}
                <input type="submit" className="submit-input" onClick={handleSubmit} />
                <p className="error">{error}</p>
			</form>
            <hr />
            <h2>GET THE APP</h2>
		</div>
	);
};

export default AuthModal;
