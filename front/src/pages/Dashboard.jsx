import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/chat/ChatContainer";

const Dashboard = () => {
	const [user, setUser] = useState();
	const [lastDirection, setLastDirection] = useState(null);
	const [genderedUsers, setGenderedUsers] = useState();
	const [swipedUser, setSwipedUser] = useState();
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);

	const userId = cookies.userId;

	const updateMatches = async (matchedUserId) => {
		try {
			await axios.put("http://localhost:8000/addmatch", {
				userId,
				matchedUserId,
			});
			getUser();
		} catch (err) {
			console.log(err);
		}
	};

	const swiped = (direction, swipedUserId) => {
		if (direction === "right") {
			updateMatches(swipedUserId);
			setSwipedUser(swipedUserId);
		}
		setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	const matchedUserIds = user?.matches
		.map(({ user_id }) => user_id)
		.concat(userId);



	
	const filteredUsers = genderedUsers?.filter(
		(genderedUsers) => !matchedUserIds?.includes(genderedUsers)
	);

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
	}, [user]);

	useEffect(() => {
		getGenderedUsers();
	}, [genderedUsers]);

	return (
		<>
			{user && (
				<div className="dashboard">
					<ChatContainer user={user} swipedUser={swipedUser} />
					<div className="swiper-container">
						<div className="card-container">
							{filteredUsers?.map((character) => (
								<TinderCard
									className="swipe"
									key={character._id}
									onSwipe={(dir) => swiped(dir, character.user_id)}
									onCardLeftScreen={() => outOfFrame(character.first_name)}
								>
									<div
										style={{
											backgroundImage: "url(" + character.url + ")",
										}}
										className="card"
									>
										<h3>{character.first_name}</h3>
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
