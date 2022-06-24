import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import NotFound from "../../pages/NotFound";
import NavbarPrincipal from "../NavBarPrincipal";

const index = () => {
	return (
		<div>
			<Router>
				<NavbarPrincipal />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/profil" exact element={<Profil />} />
					<Route path="/trending" exact element={<Trending />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
