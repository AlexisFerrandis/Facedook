import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UIdContext } from "./AppContext";
// import Logout from "./Log/Logout";

const NavBarPrincipal = () => {
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	return (
		<header className="header">
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
							<div className="search-on principal-navbar-ico">
								<img src="./assets/picto/magnifying-glass-solid.svg" alt="search" />
							</div>
						) : (
							<li></li>
						)}
					</div>
					<div className="mid-part">
						<ul className="mid-part-all">
							<li className="thread ">
								<NavLink to="/" className={(state) => (state.isActive ? "is-active" : "")}>
									<div className="principal-navbar-ico ">
										<img src="./assets/picto/house-solid.svg" alt="home" />
									</div>
								</NavLink>
							</li>
							{uid ? (
								<li className="todo">
									<NavLink to="/friends" className={(state) => (state.isActive ? "is-active" : "")}>
										<div className="principal-navbar-ico">
											<img src="./assets/picto/user-group-solid.svg" alt="friends" />
										</div>
									</NavLink>
								</li>
							) : (
								<li></li>
							)}
							{/* <li className="principal-navbar-ico">
								<NavLink to="/pages">
									<img src="./assets/picto/flag-solid.svg" alt="home" />
								</NavLink>
							</li> */}
							{uid ? (
								<li className="todo">
									<NavLink to="/watch" className={(state) => (state.isActive ? "is-active" : "")}>
										<div className="principal-navbar-ico">
											<img src="./assets/picto/photo-film-solid.svg" alt="pictures" />
										</div>
									</NavLink>
								</li>
							) : (
								<li></li>
							)}
							{/* <li className="principal-navbar-ico">
								<NavLink to="/group">
									<img src="./assets/picto/users-line-solid.svg" alt="home" />
								</NavLink>
							</li> */}
						</ul>
					</div>
					{uid ? (
						<div className="right-part">
							<ul className="right-part-list">
								<li className="options-navbar-ico">
									<img className="ico" src="./assets/picto/list-ul-solid.svg" alt="settings" />
								</li>
								<li className="options-navbar-ico">
									<img className="ico" src="./assets/picto/facebook-messenger-brands.svg" alt="messenger" />
								</li>
								<li className="options-navbar-ico">
									<img className="ico" src="./assets/picto/bell-solid.svg" alt="notifications" />
								</li>
								<NavLink to="/profil">
									<li className="profil-pic-container">
										<img className="profil-pic" src={userData.picture} alt="profil-pic" />
									</li>
								</NavLink>
								{/* <Logout /> */}
							</ul>
						</div>
					) : (
						<li></li>
					)}
				</div>
			</nav>
		</header>
	);
};

export default NavBarPrincipal;
