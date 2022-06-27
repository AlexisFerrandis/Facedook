import React from "react";
import { useSelector } from "react-redux";

const FriendsRecommandation = () => {
	const usersData = useSelector((state) => state.usersReducer);
	const shuffledArray = usersData.sort((a, b) => 0.5 - Math.random());

	return (
		<div className=" friends-recommendations-container">
			<div className="window-container">
				<h4>Connaissez-vous...</h4>
				<ul>
					{shuffledArray.map((user) => {
						return (
							<li key={user._id} className="friend-container">
								<div className="friend-recommandation">
									<div className="friend-recommandation-picture">
										<img src={user.picture} alt="friend-pic" />
									</div>
									<div className="friend-recommandation-infos">
										<div className="friend-recommandation-name">{user.pseudo}</div>

										<button className="add-friend-btn">
											<img src="./assets/picto/user-plus-solid.svg" alt="add-friend" />
											Ajouter
										</button>
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
