import React, { useContext } from "react";

import { UIdContext } from "../components/AppContext";

import Log from "../components/Log";
import LeftNavBar from "../components/LeftNavBar";
import NavBarPrincipal from "../components/NavBarPrincipal";
import RightNavBar from "../components/RightNavBar";
import NewPostForm from "../components/Post/NewPostForm";
import Thread from "../components/Thread";

const Home = () => {
	const uid = useContext(UIdContext);

	return (
		<div>
			<NavBarPrincipal />
			<div className="home-container">
				<div className="home-content">
					<LeftNavBar />
					<main className="home-thread-container">
						<header className="home-thread-header">
							{uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
							<Thread />
						</header>
					</main>
					<RightNavBar />
				</div>
			</div>
		</div>
	);
};

export default Home;
