import React from "react";
import { NavLink } from "react-router-dom";
import NavBarPrincipal from "../components/NavBarPrincipal";

const NotFound = () => {
	return (
		<div className="not-found-page">
			<NavBarPrincipal />
			<main className="not-found-container">
				<img className="ico" src="./assets/picto/colored/not-found.svg" alt="not found" />
				<h1>Cette page n'est pas disponible</h1>
				<p>Le lien peut être non valide ou la page a peut-être été supprimée. Vérifiez si le lien que vous essayez d’ouvrir est correct.</p>
				<NavLink to="/">
					<button className="submit-btn">Accéder au fil d'actualité</button>
				</NavLink>
				<NavLink to="/">
					<h2>Retour</h2>
				</NavLink>
				<h2>Accéder aux pages d’aide</h2>
			</main>
		</div>
	);
};

export default NotFound;
