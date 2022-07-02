import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
// import Trending from "../../pages/Trending";

import Friends from "../../pages/Friends";
import Watch from "../../pages/Watch";

import NotFound from "../../pages/NotFound";
import UsersProfil from "../../pages/UsersProfil";
// import NavbarPrincipal from "../NavBarPrincipal";

const index = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/profil" exact element={<Profil />} />

					<Route path="/friends" exact element={<Friends />} />
					<Route path="/watch" exact element={<Watch />} />

					<Route path="/:id" element={<UsersProfil />} />

					{/* <Route path="/trending" exact element={<Trending />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
