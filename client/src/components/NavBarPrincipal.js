import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UIdContext } from "./AppContext";
// import Logout from "./Log/Logout";

const NavBarPrincipal = () => {
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	return (
		<nav className="principal-nav">
			<div className="principal-nav-container">
				<div className="left-part">
					<div className="logo">
						<NavLink to="/">
							<div className="logo">
								<img src="./assets/logo/letter-logo.png" alt="home" />
							</div>
						</NavLink>
					</div>
					{uid ? (
						<div className="search-on">
							<img src="./assets/picto/magnifying-glass-solid.svg" alt="search" />
						</div>
					) : null}
				</div>
				<div className="mid-part">
					<div className="thread">
						<NavLink to="/">
							<div className="principal-navbar-ico">
								<img src="./assets/picto/house-solid.svg" alt="home" />
							</div>
						</NavLink>
					</div>
					{uid ? (
						<ul className="mid-part-all">
							<li className="principal-navbar-ico">
								<NavLink to="/friends">
									<img src="./assets/picto/user-group-solid.svg" alt="home" />
								</NavLink>
							</li>
							<li className="principal-navbar-ico">
								<NavLink to="/pages">
									<img src="./assets/picto/flag-solid.svg" alt="home" />
								</NavLink>
							</li>
							<li className="principal-navbar-ico">
								<NavLink to="/watch">
									<img src="./assets/picto/photo-film-solid.svg" alt="home" />
								</NavLink>
							</li>
							<li className="principal-navbar-ico">
								<NavLink to="/group">
									<img src="./assets/picto/users-line-solid.svg" alt="home" />
								</NavLink>
							</li>
						</ul>
					) : null}
				</div>
				{uid ? (
					<div className="right-part">
						<ul className="right-part-list">
							<li className="options-navbar-ico">
								<NavLink to="/settings">
									<img src="./assets/picto/list-ul-solid.svg" alt="home" />
								</NavLink>
							</li>
							<li className="options-navbar-ico">
								<NavLink to="/messenger">
									<img src="./assets/picto/facebook-messenger-brands.svg" alt="home" />
								</NavLink>
							</li>
							<li className="options-navbar-ico">
								<NavLink to="/notifications">
									<img src="./assets/picto/bell-solid.svg" alt="home" />
								</NavLink>
							</li>
							<li className="options-navbar-ico">
								<NavLink to="/profil">{userData.pseudo}</NavLink>
							</li>
							{/* <Logout /> */}
						</ul>
					</div>
				) : null}
			</div>
		</nav>
	);
};

export default NavBarPrincipal;
