import React, { useContext } from "react";

import { UIdContext } from "../components/AppContext";

import Log from "../components/Log";
import LeftNavBar from "../components/LeftNavBar";
import NavBarPrincipal from "../components/NavBarPrincipal";
import RightNavBar from "../components/RightNavBar";

import NewPostForm from "../components/Post/NewPostForm";
import FriendsRecommandation from "../components/FriendsRecommandation";

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
							{uid ? <NewPostForm /> : <Log signin={true} signup={false} context={"homepage"} />}
							<FriendsRecommandation />
						</header>
						<Thread />
					</main>
					<RightNavBar />
				</div>
			</div>
		</div>
	);
};

export default Home;
