import React, { useContext, useEffect, useState } from "react";
import { UIdContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { likePostComment } from "../../actions/post.actions";

const CommentLikeButton = (props) => {
	const [liked, setLiked] = useState(false);
	const uid = useContext(UIdContext);

	const dispatch = useDispatch();

	const like = () => {
		dispatch(likePostComment(props.postId, props.comment._id, uid));
		setLiked(true);
		props.comment.likers.length += 1;
	};

	const unlike = () => {
		dispatch(likePostComment(props.postId, props.comment._id, uid));
		setLiked(false);
		props.comment.likers.length = props.comment.likers.length - 1;
	};

	useEffect(() => {
		if (props.comment.likers.includes(uid)) setLiked(true);
		else setLiked(false);
	}, [uid, props.comment.likers]);

	return (
		<>
			{uid && liked && (
				<span className="liked" onClick={unlike}>
					J'aime
				</span>
			)}
			{uid && liked === false && (
				<span className="to-like" onClick={like}>
					J'aime
				</span>
			)}
		</>
	);
};

export default CommentLikeButton;
