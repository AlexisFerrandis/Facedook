import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NewPostForm = () => {
	const userData = useSelector((state) => state.userReducer);

	return (
		<div className="post-form-container window-container">
			<div className="header-form">
				<NavLink to="/profil">
					<div className="user-pic">
						<img src={userData.picture} alt="user-img" />
					</div>
				</NavLink>
				<div className="vanilla-input">
					<p>Quoi de neuf, {userData.pseudo} ?</p>
				</div>
			</div>
			<div className="grey-separator"></div>
			<div className="footer-form">
				<div className="complexe-input">
					<img className="video-picto" src="./assets/picto/video-solid.svg" alt="video" />
					Ajouter une vidéo
				</div>
				<div className="complexe-input">
					<img className="image-picto" src="./assets/picto/file-image-solid.svg" alt="share-pic" />
					Photo
				</div>
				<div className="complexe-input">
					<img className="mood-picto" src="./assets/picto/face-laugh-solid.svg" alt="emotion" />
					Humeur/Activité
				</div>
			</div>
		</div>
	);
};

export default NewPostForm;
