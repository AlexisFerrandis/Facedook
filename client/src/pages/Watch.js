import React, { useContext } from "react";
import { UIdContext } from "../components/AppContext";

import NavBarPrincipal from "../components/NavBarPrincipal";
import FullLogPage from "../components/Log/FullLogPage";

import OnlyVideoThread from "../components/OnlyVideoThread";

const Watch = () => {
	const uid = useContext(UIdContext);

	return (
		<div>
			{uid ? (
				<>
					<NavBarPrincipal />
					<main className="friends-page">
						<section className="friends-menu watch-edition">
							<div className="friends-menu-container">
								<div className="friends-menu-title">
									<h1>Watch</h1>
									<img src="./assets/picto/gear-solid.svg" alt="settings" />
								</div>
								<div className="friends-menu-options">
									<div className="friends-menu-option is-active">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/video-solid.svg" alt="Home" />
											</div>
											<h3 className="friends-menu-option-text">Accueil</h3>
										</div>
										<div className="right-part"></div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/youtube-brands.svg" alt="direct" />
											</div>
											<h3 className="friends-menu-option-text">En direct</h3>
										</div>
										<div className="right-part"></div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/clapperboard-solid.svg" alt="Suggestions" />
											</div>
											<h3 className="friends-menu-option-text">Programmes</h3>
										</div>
										<div className="right-part"></div>
									</div>

									<div className="friends-menu-option">
										<div className="left-part">
											<div className="friends-menu-option-ico ">
												<img src="./assets/picto/film-solid.svg" alt="friends all" />
											</div>
											<h3 className="friends-menu-option-text">Vidéos enregistrées</h3>
										</div>
										<div className="right-part"></div>
									</div>
								</div>
							</div>
						</section>
						<section className="watch-thread">
							<OnlyVideoThread />
						</section>
					</main>
				</>
			) : (
				<FullLogPage signin={true} signup={false} context={"friends"} />
			)}
		</div>
	);
};

export default Watch;
