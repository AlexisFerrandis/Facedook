import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UIdContext } from "../components/AppContext";

const LeftNavBar = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="left-nav-container">
			<div className="left-nav-links">
				<ul>
					<li>
						<NavLink to="/">
							<div className="link-container">
								<img src="./" alt="todo" />
								<p>{uid.pseudo}</p>
							</div>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LeftNavBar;
