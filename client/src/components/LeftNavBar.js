import React, { useContext, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
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
							<div className="link-container">DINAMYK NAME</div>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LeftNavBar;
