import React, { useContext } from "react";
import Log from "../components/Log";
import { UIdContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="profil-page">
			{uid ? (
				<UpdateProfil />
			) : (
				<div className="full-login-page">
					<div className="up-part">
						<div className="log-container">
							<div className="logo-tag">
								<div className="img-container">
									<img src="./assets/logo/logo.png" alt="img" />
								</div>
								<h1>Avec Facedook, partagez et restez en contact avec votre entourage.</h1>
							</div>
							<Log signin={true} signup={false} />
						</div>
						<div className="pro-account-creation">
							<span>Créer une Page</span> pour une célébrité, une marque ou une entreprise.
						</div>
					</div>
					<div className="bot-part">
						<div className="settings-container">
							<div className="languages">
								<ul>
									<li>Français (France)</li>
									<li>English (US)</li>
									<li>Español</li>
									<li>Türkçe</li>
									<li>Português (Portugal)</li>
									<li>العربية</li>
									<li>Italiano</li>
									<li>Deutsch</li>
									<li>हिन्दी</li>
									<li>中文(简体)</li>
									<li>日本語</li>
									<button className="more-languages">+</button>
								</ul>
							</div>
							<div className="grey-separator"></div>
							<div className="settings">
								<ul>
									<li>S’inscrire</li>
									<li>Se connecter</li>
									<li>Messenger</li>
									<li>Facedook Lite</li>
									<li>Watch</li>
									<li>Lieux</li>
									<li>Jeux</li>
									<li>Marketplace</li>
									<li>Facedook Play</li>
									<li>Oculus</li>
									<li>Portal</li>
								</ul>
								<ul>
									<li>Instagram</li>
									<li>Bulletin</li>
									<li>Local</li>
									<li>Collectes de fonds</li>
									<li>Services</li>
									<li>Srg</li>
									<li>Groupes</li>
									<li>Créer une publicité</li>
									<li>Créer une page</li>
									<li>Développeurs</li>
									<li>Emplois</li>
								</ul>
								<ul>
									<li>Confidentialité</li>
									<li>Cookies</li>
									<li>Conditions générales</li>
									<li>Aide</li>
									<li>Importation des contacts et non-utilisateurs</li>
								</ul>
							</div>
							<div className="copyright">
								<p> Mëta © 2022</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profil;
