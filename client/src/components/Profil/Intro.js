import React from "react";
import { NavLink } from "react-router-dom";

const Intro = () => {
	return (
		<>
			<div className="profil-intro  window-container">
				<h3>Intro</h3>
				<div className="options">
					<button>Ajouter une bio</button>
					<button>Modifier les infos</button>
					<button>Ajouter des loisirs</button>
					<button>Ajouter du contenu à la une</button>
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
			</div>

			<div className="legal">
				<p>Confidentialité</p>·<p>Conditions générales</p>·<p>Publicités</p>·<p>Choix publicitaires</p>·<p>Cookies</p>·<p>Plus</p>·<p>Mëta © 2022</p>
			</div>
		</>
	);
};

export default Intro;
