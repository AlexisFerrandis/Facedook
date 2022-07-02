import React, { useContext } from "react";
import { UIdContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";
import NavBarPrincipal from "../components/NavBarPrincipal";
import FullLogPage from "../components/Log/FullLogPage";

const Profil = () => {
	const uid = useContext(UIdContext);

	return (
		<div className="profil-page">
			{uid ? (
				<>
					<NavBarPrincipal />
					<UpdateProfil />
				</>
			) : (
				<FullLogPage />
			)}
		</div>
	);
};

export default Profil;
