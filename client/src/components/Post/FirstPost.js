import React from "react";
import { useSelector } from "react-redux";

const FirstPost = () => {
	// const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);

	return (
		<div className="post-container window-container">
			<div className="post-header">
				<div className="poster-information">
					<div className="poster-picture">{/* <img className="poster-pic-preview" src={userData.picture} alt="profile" /> */}</div>
					<div className="poster-post">
						<div className="poster-name">
							<h6>{userData.pseudo}</h6>
							<div className="post-date"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstPost;
