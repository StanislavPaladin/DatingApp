import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser}) => {
	const [matchedProfiles, setMatchedProfiles] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

	const matchetUserIds = matches.map(({ user_id }) => user_id);
    const userId = cookies.userId;

	const getMatches = async () => {
		try {
			const response = await axios.get("http://localhost:8000/users", {
				params: { userIds: JSON.stringify(matchetUserIds) },
			});
			setMatchedProfiles(response.data);
		} catch (err) {
			console.log(err);
		}
	};


	useEffect(() => {
		getMatches();
	}, [matches]);

    const filteredMatchesProfils = matchedProfiles?.filter(matchedProfile => matchedProfile.matches.filter(profile => profile.user_id == '').length > 0 )

	return (
		<div className="matches-display">
			{filteredMatchesProfils?.map((match, _index) => (
				<div className="match-card" key={match.user_id} onClick={() => setClickedUser(match)}>
					<div className="image-container">
						<img src={match?.url} alt={match.first_name + ` profile`} />
					</div>
                    <h3>{match?.first_name}</h3>
				</div>
			))}
		</div>
	);
};

export default MatchesDisplay;
