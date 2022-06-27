import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Intro from "./Intro";
import UploadProfilPic from "./UploadProfilPic";

const UpdateProfil = () => {
	const userData = useSelector((state) => state.userReducer);

	const [profilPicModification, setProfilPicModification] = useState(false);
	// const dispatch = useDispatch();

	const handleProfilPicModification = (e) => {
		e.preventDefault();

		setProfilPicModification(true);
	};

	return (
		<>
			{profilPicModification ? <UploadProfilPic profilPicModification={setProfilPicModification} /> : null}
			<section className="update-profil-page">
				<div className="pictures-modifications">
					<div className="banner-container">
						<img src="./" alt="banner-img" />
						<div className="banner-modificator">
							<button>
								<img className="camera-picto" src="./assets/picto/camera-solid.svg" alt="camera" />
								Ajouter une photo de couverture
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
							<h1>{userData.pseudo}</h1>
							<div className="logout">
								<button>
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
							<li>À propos</li>
							<li>Amis</li>
							<li>Photos</li>
							<li>Vidéos</li>
							<li>Lieux</li>
							<li>Plus &#9207;</li>
						</ul>
					</div>
					<div className="fake-btn">
						<button>...</button>
					</div>
				</div>
			</section>
			<div className="shadow-separator"></div>

			<section className="user-firends-bio-thread">
				<div className="friends-recommendations">FRIENDS RECOMMANDATIONS</div>

				<div className="profil-thread">
					<div className="informations-container">
						<Intro />
					</div>
					<div className="thread-container">
						<div className="post-container">Que voulez vous dire ?</div>
						<div className="publications-settings">Publications</div>
						<div className="user-thread">Thread</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UpdateProfil;
