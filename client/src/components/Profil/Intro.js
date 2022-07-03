import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBio } from "../../actions/user.actions";
// import { dateParser } from "../Utils";
// import FollowHandler from "./FollowHandler";

const Intro = (usersProfil) => {
	const [bio, setBio] = useState("");
	const [updateForm, setUpdateForm] = useState(false);
	const userData = useSelector((state) => state.userReducer);
	// const usersData = useSelector((state) => state.usersReducer);
	// const error = useSelector((state) => state.errorReducer.userError);

	const dispatch = useDispatch();

	// const [followingPopup, setFollowingPopup] = useState(false);
	// const [followersPopup, setFollowersPopup] = useState(false);

	const handleUpdate = () => {
		dispatch(updateBio(userData._id, bio));
		setUpdateForm(false);
	};
	const cancelUpdate = () => {
		setUpdateForm(false);
	};

	return (
		<>
			<div className="profil-intro  window-container">
				<h3>Intro</h3>
				<div className="options">
					{updateForm === false && (
						<>
							{!usersProfil.visiting && (
								<button className="principal-option" onClick={() => setUpdateForm(!updateForm)}>
									{userData.bio ? "Modifier la bio" : "Ajouter une bio"}
								</button>
							)}
							<p className="content-value" onClick={() => setUpdateForm(!updateForm)}>
								{userData.bio}
							</p>
						</>
					)}
					{updateForm && (
						<>
							<textarea type="text" defaultValue={userData.bio} onChange={(e) => setBio(e.target.value)} placeholder="Décrivez-vous" maxLength="101"></textarea>
							<p className="car-count">{101 - bio.length + " caractères restants"}</p>
							<div className="buttons-container">
								<button className="secondary-options" onClick={cancelUpdate}>
									Annuler
								</button>
								<button className="secondary-options submit" onClick={handleUpdate}>
									Enregistrer
								</button>
							</div>
						</>
					)}
					{!usersProfil.visiting && (
						<>
							<button className="principal-option">Modifier les infos</button>
							<button className="principal-option">Ajouter des loisirs</button>
							<button className="principal-option">Ajouter du contenu à la une</button>
						</>
					)}
				</div>
			</div>

			<div className="profil-photo  window-container">
				<h3>Photos</h3>
				<div className="fake-link">Toutes les photos</div>
			</div>

			<div className="profil-photo  window-container">
				<h3>Amis</h3>
				<NavLink to="/friends">
					<div className="fake-link">Touts les amis</div>
				</NavLink>
				{/* 
				HERE TODO
				<div className="friends-grid">
					<ul>
						{usersData.map((user) => {
							for (let i = 0; i < userData.following.length && i < 9; i++) {
								if (user._id === userData.following[i]) {
									return (
										<li key={user._id}>
											<img src={user.picture} alt="user-pic" />
											<h4>{user.pseudo}</h4>
										</li>
									);
								}
							}
							return null;
						})}
					</ul>
				</div> */}
			</div>

			<div className="legal">
				<p>Confidentialité</p>·<p>Conditions générales</p>·<p>Publicités</p>·<p>Choix publicitaires</p>·<p>Cookies</p>·<p>Plus</p>·<p>Mëta © 2022</p>
			</div>
		</>
	);
};

export default Intro;
