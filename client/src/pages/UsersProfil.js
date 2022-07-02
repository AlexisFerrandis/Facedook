import React from "react";
import { useParams } from "react-router-dom";
import NavBarPrincipal from "../components/NavBarPrincipal";

const UsersProfil = () => {
	let { id } = useParams();
	console.log(id);

	return (
		<div>
			<NavBarPrincipal />
			UsersProfil
		</div>
	);
};

export default UsersProfil;
