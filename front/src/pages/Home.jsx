import { useState } from "react";
import { useCookies } from "react-cookie";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const authToken = cookies.authToken;
	const minimal = false;

	const handleClick = () => {
		if (authToken) {
			removeCookie("userId", cookies.userId);
			removeCookie("authToken", cookies.authToken);
			window.location.reload();
			return;
		}
		setShowModal(true);
		setIsSignUp(true);
	};
	return (
		<div className="overlay">
			<Nav
				authToken={authToken}
				minimal={minimal}
				setShowModal={setShowModal}
				setIsSignUp={setIsSignUp}
				showModal={showModal}
			/>
			<div className="home">
				<h1 className="primary-title">Swipe Right</h1>
				<button className="primary-button" onClick={handleClick}>
					{authToken ? "Signout" : "Create account"}
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
