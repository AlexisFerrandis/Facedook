import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import UploadBannerPic from "./UploadBannerPic";
import UploadProfilPic from "./UploadProfilPic";

import FriendsRecommandation from "../FriendsRecommandation";
import Intro from "./Intro";

import cookie from "js-cookie";
import NewPostForm from "../Post/NewPostForm";

import Thread from "../Thread";

const UpdateProfil = () => {
	const userData = useSelector((state) => state.userReducer);

	const [profilPicModification, setProfilPicModification] = useState(false);
	const [bannerPicModification, setBannerPicModification] = useState(false);

	const handleProfilPicModification = (e) => {
		e.preventDefault();
		setProfilPicModification(true);
	};

	const handleBannerPicModification = (e) => {
		e.preventDefault();
		setBannerPicModification(true);
	};

	const removeCookie = (key) => {
		if (window !== "undefined") {
			cookie.remove(key, { expires: 1 });
		}
	};

	const logout = async () => {
		await axios({
			method: "get",
			url: `${process.env.REACT_APP_API_URL}api/user/logout`,
			withCredentials: true,
		})
			.then(() => removeCookie("jwt"))
			.catch((err) => console.log(err));

		window.location = "/";
	};

	return (
		<>
			{profilPicModification ? <UploadProfilPic profilPicModification={setProfilPicModification} /> : null}
			{bannerPicModification ? <UploadBannerPic bannerPicModification={setBannerPicModification} /> : null}
			<section className="update-profil-page">
				<div className="pictures-modifications">
					<div className="banner-container" onClick={handleBannerPicModification}>
						{userData.bannerPicture ? <img className="banner-pic-container" src={userData.bannerPicture} alt="banner-pic" /> : null}
						<div className="banner-modificator">
							<button>
								<img className="camera-picto" src="./assets/picto/camera-solid.svg" alt="camera" />
								<p>Ajouter une photo de couverture</p>
							</button>
						</div>
					</div>
					<div className="profil-pic-container">
						<div className="profil-pic-modificator">
							<div className="pic-container" onClick={handleProfilPicModification}>
								<img className="profil-pic" src={userData.picture} alt="profil-pic" />
							</div>
							<div className="camera-picto-container" onClick={handleProfilPicModification}>
								<img className="camera-picto" src="./assets/picto/camera-solid.svg" alt="camera" />
							</div>
						</div>
						<div className="name-and-logout">
							<div>
								<h1>{userData.pseudo}</h1>
								{userData.following && userData.following.length > 0 ? (
									<NavLink to="/friends">
										<h5>{userData.following.length === 1 ? "1 ami" : userData.following.length + " amis"}</h5>
									</NavLink>
								) : (
									""
								)}
							</div>
							<div className="logout">
								<button onClick={logout}>
									<img className="logout-pic" src="./assets/picto/right-from-bracket-solid.svg" alt="logout" />
									Se déconnecter
								</button>
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
							<NavLink to="/friends">
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
				<div className="friends-recommendations">
					<FriendsRecommandation />
				</div>

				<div className="profil-thread">
					<div className="informations-container">
						<Intro />
					</div>
					<div className="thread-container">
						<div className="post-container">
							<NewPostForm />
						</div>
						{/* <div className="publications-settings">Publications list options</div> */}
						<div className="user-thread">
							<div className="user-thread-container">
								<Thread context={userData._id} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UpdateProfil;
