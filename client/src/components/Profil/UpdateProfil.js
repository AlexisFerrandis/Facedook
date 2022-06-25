import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfil = () => {
	const userData = useSelector((state) => state.userReducer);
	// const dispatch = useDispatch();

	return (
		<section className="update-profil-page">
			<div className="pictures-modifications">
				<div className="banner-container"></div>
				<div className="profil-pic-container">
					<h1>{userData.pseudo}</h1>
				</div>
			</div>
			<div className="user-informations"></div>
			<div className="friends-suggestions"></div>
		</section>
	);
};

export default UpdateProfil;
