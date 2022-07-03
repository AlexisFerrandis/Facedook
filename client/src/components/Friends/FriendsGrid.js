import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FollowHandler from "../FollowHandler";
import { isEmpty } from "../Utils";
import { UIdContext } from "../../components/AppContext";
import { NavLink } from "react-router-dom";

const FriendsGrid = () => {
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);
	const usersData = useSelector((state) => state.usersReducer);
	const [playOnce, setPlayOnce] = useState(true);
	const [friendsHint, setFriendsHint] = useState([]);

	useEffect(() => {
		const notFriendList = () => {
			let array = [];
			usersData.map((user) => {
				if (user._id !== userData._id && user.followers.includes(userData._id)) return array.push(user._id);
				return true;
			});
			array.sort(() => 0.5 - Math.random());

			setFriendsHint(array);
		};

		if (playOnce && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
			notFriendList();
			setPlayOnce(false);
		}
	}, [usersData, friendsHint, userData, playOnce]);

	return (
		<>
			{uid && (
				<div className=" friends-recommendations-container">
					<div className="daniel-container">
						<h4>Amis</h4>
						<ul>
							{friendsHint.map((user) => {
								for (let i = 0; i < usersData.length; i++) {
									if (user === usersData[i]._id) {
										return (
											<li key={usersData[i]._id} className="friend-container">
												<div className="friend-recommandation">
													<NavLink to={"/" + usersData[i]._id}>
														<div className="friend-recommandation-picture">
															<img src={usersData[i].picture} alt="friend-pic" />
														</div>
													</NavLink>
													<div className="friend-recommandation-infos">
														<div className="friend-recommandation-name">{usersData[i].pseudo}</div>
														<FollowHandler idToFollow={usersData[i]._id} type={"suggestion"} />
													</div>
												</div>
											</li>
										);
									}
								}
								return true;
							})}
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default FriendsGrid;
