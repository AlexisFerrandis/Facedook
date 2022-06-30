import React, { useContext, useEffect, useState } from "react";
import { UIdContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.actions";

const LikeButton = ({ post }) => {
	const [liked, setLiked] = useState(false);
	const uid = useContext(UIdContext);
	const dispatch = useDispatch();

	const like = () => {
		setLiked(true);
		dispatch(likePost(post._id, uid));
	};

	const unlike = () => {
		setLiked(false);
		dispatch(unlikePost(post._id, uid));
	};

	useEffect(() => {
		if (post.likers.includes(uid)) setLiked(true);
		else setLiked(false);
	}, [uid, post.likers, liked]);

	return (
		<>
			{uid && liked === false && (
				<div className="interaction to-like" onClick={like}>
					<img src="./assets/picto/thumbs-up-regular.svg" alt="like" />
					<p>J'aime</p>
				</div>
			)}
			{uid && liked && (
				<div className="interaction liked" onClick={unlike}>
					<img src="./assets/picto/thumbs-up-regular.svg" alt="unlike" />
					<p>J'aime</p>
				</div>
			)}
		</>
	);
};

export default LikeButton;
