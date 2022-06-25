import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProfil = () => {
	const userData = useSelector((state) => state.userReducer);
	// const dispatch = useDispatch();

	return (
		<>
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
							<div className="pic-container">
								<img className="profil-pic" src={userData.picture} alt="profil-pic" />
							</div>
							<div className="camera-picto-container">
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
				<div className="user-informations"></div>
			</section>
			<section className="profil-thread"></section>
		</>
	);
};

export default UpdateProfil;
