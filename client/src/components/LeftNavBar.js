import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UIdContext } from "../components/AppContext";

const LeftNavBar = () => {
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	return (
		<>
			{uid && (
				<div className="left-nav-container">
					<div className="left-nav-links">
						<ul>
							<li>
								<NavLink to="/profil">
									<div className="link-container">
										<img className="profil-pic" src={userData.picture} alt="profil" />
										<h6>{userData.pseudo}</h6>
									</div>
								</NavLink>
							</li>
							<li>
								<NavLink to="/friends">
									<div className="link-container">
										<img src="../assets/picto/colored/friends.png" alt="friends" />
										<h6>Retrouver des amis</h6>
									</div>
								</NavLink>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/pages.png" alt="pages" />
									<h6>Pages</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/groupes.png" alt="groupes" />
									<h6>Groupes</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/marketplace.png" alt="marketplace" />
									<h6>Marketplace</h6>
								</div>
							</li>
							<li>
								<NavLink to="/watch">
									<div className="link-container">
										<img src="../assets/picto/colored/watch.png" alt="watch" />
										<h6>Watch</h6>
									</div>
								</NavLink>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/memories.png" alt="memories" />
									<h6>Souvenirs</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/record.png" alt="records" />
									<h6>Enregistrements</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/actualities.png" alt="actualities" />
									<h6>Actualités</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/events.png" alt="events" />
									<h6>Événements</h6>
								</div>
							</li>
							<li>
								<div className="link-container">
									<img src="../assets/picto/colored/most-recent.png" alt="most-recent" />
									<h6>Plus récentes</h6>
								</div>
							</li>
							<div className="grey-separator"></div>
							<div className="legal-links">
								<p>Confidentialité</p>·<p>Conditions générales</p>·<p>Publicités</p>·<p>Choix publicitaires</p>·<p>Cookies</p>·<p>Plus</p>·<p>Mëta © 2022</p>
							</div>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default LeftNavBar;
