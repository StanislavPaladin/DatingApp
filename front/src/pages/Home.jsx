import { useState } from "react";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);
	const authToken = false;
	const minimal = false;

	const handleClick = () => {
		setShowModal(true);
		setIsSignUp(true);
	};
	return (
		<div className="overlay">
			<Nav
				minimal={minimal}
				setShowModal={setShowModal}
				setIsSignUp={setIsSignUp}
				showModal={showModal}
			/>
			<div className="home">
				<h1 className="primary-title">Swipe Right</h1>
				<button
					className="primary-button"
					onClick={handleClick}
				>
					{authToken
						? "Signout"
						: "Create account"}
				</button>
				{showModal && !minimal && (
					<AuthModal
						setShowModal={setShowModal}
						isSignUp={isSignUp}
						authToken={authToken}
						minimal={minimal}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
