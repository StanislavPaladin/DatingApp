import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AuthModal = ({setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
	const navigate = useNavigate();

    

	const handleClick = () => {
		setShowModal(false);

	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        try {
            if (!email) {
                setError('Enter your email here')
            }
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match')
				return
            }
			console.log(email, password);
            const response = await axios.post('http://localhost:8000/signup', {email, password})
			
			const success = response.status === 201
			if(success) navigate ('/onboarding')

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