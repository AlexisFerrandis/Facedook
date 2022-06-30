import React, { useContext, useEffect, useState } from "react";
import { UIdContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.actions";

const LikeButton = ({ post }) => {
	const [liked, setLiked] = useState(false);
	const uid = useContext(UIdContext);
	const dispatch = useDispatch();

	// const like = () => {
	// 	dispatch(likePost(post._id, uid));
	// 	setLiked(true);
	// };

	// const unlike = () => {
	// 	dispatch(unlikePost(post._id, uid));
	// 	setLiked(false);
	// };

	// useEffect(() => {
	// 	console.log(uid);
	// 	if (post.likers.includes(uid)) setLiked(true);
	// 	else setLiked(false);
	// }, [uid, post.likers, liked]);

	return (
		<div className="interaction">
			<img src="./assets/picto/thumbs-up-regular.svg" alt="like" />
			<p>J'aime</p>
		</div>
	);
};

export default LikeButton;
