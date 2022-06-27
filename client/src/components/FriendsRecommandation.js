import React from "react";
import { useSelector } from "react-redux";
import FollowHandler from "./FollowHandler";

const FriendsRecommandation = () => {
	const userData = useSelector((state) => state.userReducer);
	const usersData = useSelector((state) => state.usersReducer);

	const userDataExeptUser = usersData.filter((user) => user._id !== userData._id);

	return (
		<div className=" friends-recommendations-container">
			<div className="window-container">
				<h4>Connaissez-vous...</h4>
				<ul>
					{userDataExeptUser.map((user) => {
						return (
							<li key={user._id} className="friend-container">
								<div className="friend-recommandation">
									<div className="friend-recommandation-picture">
										<img src={user.picture} alt="friend-pic" />
									</div>
									<div className="friend-recommandation-infos">
										<div className="friend-recommandation-name">{user.pseudo}</div>
										<FollowHandler idToFollow={user._id} type={"suggestion"} />
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default FriendsRecommandation;
