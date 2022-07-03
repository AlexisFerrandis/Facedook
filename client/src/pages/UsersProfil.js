import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { UIdContext } from "../components/AppContext";

import NavBarPrincipal from "../components/NavBarPrincipal";

import FollowHandler from "../components/FollowHandler";
import Intro from "../components/Profil/Intro";

import Thread from "../components/Thread";
import { isEmpty } from "../components/Utils";

const UsersProfil = () => {
	const uid = useContext(UIdContext);
	let { id } = useParams();

	const userData = useSelector((state) => state.userReducer);
	const usersData = useSelector((state) => state.usersReducer);

	const [playOnce, setPlayOnce] = useState(true);

	const [userProfil, setUserProfil] = useState({});

	useEffect(() => {
		if (id === uid) {
			window.location.href = "/profil";
		}

		const handleUserProfil = () => {
			const user = usersData.find((user) => user._id === id);
			setUserProfil(user);
		};

		if (playOnce && !isEmpty(usersData) && !isEmpty(id)) {
			handleUserProfil();
			setPlayOnce(false);
		}
	}, [usersData, userData, playOnce, userProfil, id, uid]);

	return (
		<>
			<NavBarPrincipal />
			<section className="update-profil-page">
				<div className="pictures-modifications">
					<div className="banner-container">{userProfil.bannerPicture ? <img className="banner-pic-container" src={userProfil.bannerPicture} alt="banner-pic" /> : null}</div>
					<div className="profil-pic-container">
						<div className="profil-pic-modificator">
							<div className="pic-container">
								<img className="profil-pic" src={userProfil.picture} alt="profil-pic" />
							</div>
						</div>
						<div className="name-and-logout">
							<div>
								<h1>{userProfil.pseudo}</h1>
								{userProfil.following && userProfil.following.length > 0 ? (
									<NavLink to={`/` + id}>
										<h5>{userProfil.following.length === 1 ? "1 ami" : userProfil.following.length + " amis"}</h5>
									</NavLink>
								) : (
									""
								)}
							</div>
							<div className="follow">
								<FollowHandler idToFollow={id} type={"suggestion"} />
							</div>
						</div>
						<div className="grey-separator"></div>
					</div>
				</div>
				<div className="user-informations">
					<div className="user-informations-container">
						<ul>
							<li className="is-active">Publications</li>
							<li className="tablet-display-none">À propos</li>
							<NavLink to={`/` + id}>
								<li className="mobile-display-none">Amis</li>
							</NavLink>
							<li className="mobile-display-none">Photos</li>
							<li className="mobile-display-none">Vidéos</li>
							<li className="tablet-display-none">Lieux</li>
							<li className="tablet-display-none">Plus &#9207;</li>
						</ul>
					</div>
					<div className="fake-btn">
						<button>...</button>
					</div>
				</div>
			</section>
			<div className="shadow-separator"></div>

			<section className="user-firends-bio-thread">
				{/* <div className="friends-recommendations">
					<FriendsRecommandation />
				</div> */}

				<div className="profil-thread">
					<div className="informations-container">
						<Intro visiting={id} />
					</div>
					<div className="thread-container">
						{/* <div className="publications-settings">Publications list</div> */}
						<div className="user-thread">
							<div className="user-thread-container visiting">
								<Thread context={id} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UsersProfil;
