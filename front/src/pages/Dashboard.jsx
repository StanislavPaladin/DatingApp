import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/chat/ChatContainer";

const Dashboard = () => {
	const [user, setUser] = useState();
	const [lastDirection, setLastDirection] = useState(null);
	const [genderedUsers, setGenderedUsers] = useState();
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);

	const userId = cookies.userId;

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	const getUser = async () => {
		try {
			const response = await axios.get("http://localhost:8000/user", {
				params: { userId },
			});
			if (JSON.stringify(response.data) !== JSON.stringify(user)) {
				setUser(response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const getGenderedUsers = async () => {
		try {
			const response = await axios.get("http://localhost:8000/gendered-users", {
				params: { gender: user?.gender_interest },
			});
			if (JSON.stringify(response.data) !== JSON.stringify(genderedUsers)) {
				setGenderedUsers(response.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
		getGenderedUsers();
	}, [user, genderedUsers]);

	console.log(user);
	console.log(genderedUsers);

	// mocked data
	const characters = [
		{
			name: "Richard Hendricks",
			url: "https://i.imgur.com/Q9WPlWA.jpeg",
		},
		{
			name: "Erlich Bachman",
			url: "https://i.imgur.com/MWAcQRM.jpeg",
		},
		{
			name: "Monica Hall",
			url: "https://i.imgur.com/wDmRJPc.jpeg",
		},
		{
			name: "Jared Dunn",
			url: "https://i.imgur.com/OckVkRo.jpeg",
		},
		{
			name: "Dinesh Chugtai",
			url: "https://i.imgur.com/Q9WPlWA.jpeg",
		},
	];

	return (
		<>
			{user && (
				<div className="dashboard">
					<ChatContainer user={user} />
					<div className="swiper-container">
						<div className="card-container">
							{characters.map((character) => (
								<TinderCard
									className="swipe"
									key={character.name}
									onSwipe={(dir) => swiped(dir, character.name)}
									onCardLeftScreen={() => outOfFrame(character.name)}
								>
									<div
										style={{
											backgroundImage: "url(" + character.url + ")",
										}}
										className="card"
									>
										<h3>{character.name}</h3>
									</div>
								</TinderCard>
							))}
							<div className="swipe-info">
								{lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Dashboard;
