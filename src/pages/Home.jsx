import { useState } from "react";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const authToken = false;
	const minimal = false;

	const handleClick = () => {
		setShowModal(true);
	};
	return (
		<div className="overlay">
			<Nav minimal={minimal} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
			<div className="home">
				<h1>Swipe Right</h1>
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
            authToken={authToken}
            minimal={minimal}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
