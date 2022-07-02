import React, { useContext } from "react";
import { UIdContext } from "../components/AppContext";
import FriendsRecommendation from "../components/FriendsRecommandation";

import NavBarPrincipal from "../components/NavBarPrincipal";

import FriendsGrid from "../components/Friends/FriendsGrid";
import FullLogPage from "../components/Log/FullLogPage";

const Friends = () => {
	const uid = useContext(UIdContext);
	return (
		<div>
			{uid ? (
				<>
					<NavBarPrincipal />
					<main className="friends-page">
						<section className="friends-menu">
							<div className="friends-menu-container">
								<div className="friends-menu-title">
									<h1>Amis</h1>
									<img src="./assets/picto/gear-solid.svg" alt="settings" />
								</div>
								<div className="friends-menu-options">
									<div className="friends-menu-option is-active">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-ninja-solid.svg" alt="Home" />
											</div>
											<h3 className="friends-menu-option-text">Accueil</h3>
										</div>
										<div className="right-part"></div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-doctor-solid.svg" alt="invitations" />
											</div>
											<h3 className="friends-menu-option-text">Invitations</h3>
										</div>
										<div className="right-part">
											<img src="./assets/picto/chevron-right-solid.svg" alt="Chevron" />
										</div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-astronaut-solid.svg" alt="Suggestions" />
											</div>
											<h3 className="friends-menu-option-text">Suggestions</h3>
										</div>
										<div className="right-part">
											<img src="./assets/picto/chevron-right-solid.svg" alt="chevron" />
										</div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-graduate-solid.svg" alt="friends all" />
											</div>
											<h3 className="friends-menu-option-text">Tous les amis</h3>
										</div>
										<div className="right-part">
											<img src="./assets/picto/chevron-right-solid.svg" alt="chev" />
										</div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-tie-solid.svg" alt="birthday" />
											</div>
											<h3 className="friends-menu-option-text">Anniversaires</h3>
										</div>
										<div className="right-part"></div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/user-secret-solid.svg" alt="personalized" />
											</div>
											<h3 className="friends-menu-option-text">Listes personnalisées</h3>
										</div>
										<div className="right-part">
											<img src="./assets/picto/chevron-right-solid.svg" alt="cheron" />
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="friends-list">
							<div className="friends-recommendation">
								<FriendsRecommendation />
								<FriendsGrid id={uid} />
							</div>
						</section>
					</main>
				</>
			) : (
				<FullLogPage signin={true} signup={false} context={"friends"} />
			)}
		</div>
	);
};

export default Friends;
