import React from "react";
import LikeButton from "./LikeButton";

const PostInteractions = (post) => {
	return (
		<div className="post-interactions">
			<LikeButton post={post} />
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
