import React, { useContext } from "react";
import { UIdContext } from "../AppContext";
import LikeButton from "./LikeButton";

const PostInteractions = ({ post, showComments }) => {
	const uid = useContext(UIdContext);
	return (
		<>
			{uid && (
				<div className="post-interactions">
					<LikeButton post={post} />

					<div className="interaction" onClick={showComments}>
						<img src="./assets/picto/message-regular.svg" alt="comment" />
						<p>Commenter</p>
					</div>

					<div className="interaction">
						<img src="./assets/picto/share-solid.svg" alt="share" />
						<p>Partager</p>
					</div>
				</div>
			)}
		</>
	);
};

export default PostInteractions;
