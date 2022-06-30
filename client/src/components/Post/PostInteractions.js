import React from "react";
import LikeButton from "./LikeButton";

const PostInteractions = () => {
	return (
		<div className="post-interactions">
			<div className="interaction">
				<img src="./assets/picto/thumbs-up-regular.svg" alt="like" />
				<p>J'aime</p>
			</div>
			<div className="interaction">
				<img src="./assets/picto/message-regular.svg" alt="comment" />
				<p>Commenter</p>
			</div>
			<div className="interaction">
				<img src="./assets/picto/share-solid.svg" alt="share" />
				<p>Partager</p>
			</div>
		</div>
	);
};

export default PostInteractions;
