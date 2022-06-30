import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../actions/post.actions";
// import FollowHandler from "../Profil/FollowHandler";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ post }) => {
	const [text, setText] = useState("");

	const usersData = useSelector((state) => state.usersReducer);
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	const handleComment = (e) => {
		e.preventDefault();

		if (text) {
			dispatch(addComment(post._id, userData._id, text, userData.pseudo))
				.then(() => dispatch(getPosts()))
				.then(() => setText(""));
		}
	};

	return (
		<div className="comments-container">
			<h5>Plus pertinent ⏷</h5>
			{userData._id && (
				<>
					<div className="user-comment-form">
						<div className="user-pic">
							<img src={userData.picture} alt="user-pic" />
							<div className="green-dot"></div>
						</div>
						<form action="" onSubmit={handleComment} className="comment-form">
							<input className="comment-template" type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Écrivez un commentaire..." />
							<button className={text ? "send-btn" : "inactif-btn"} type="submit" value="envoyer">
								<img src="./assets/picto/paper-plane-solid.svg" alt="send" />
							</button>
						</form>
					</div>
					<p className="press-enter">Appuyez sur Entrée pour publier votre commentaire.</p>
				</>
			)}
			<div className="comments-list">
				{post.comments.map((comment) => {
					return (
						<div className="comment-item" key={comment._id}>
							<div className={comment.commenterId === userData._id ? "comment-container client" : "comment-container"}>
								<div className="left-part">
									<img
										src={
											!isEmpty(usersData[0]) &&
											usersData
												.map((user) => {
													if (user._id === comment.commenterId) return user.picture;
													else return null;
												})
												.join("")
										}
										alt="commenter-pic"
									/>
								</div>
								<div className="editor-container comment-template">
									<div className="comment-header">
										<div className="pseudo">
											<h6>{comment.commenterPseudo}</h6>
											{/* {comment.commenterId !== userData._id && <FollowHandler idToFollow={comment.commenterId} type={"card"} />} */}
										</div>
									</div>
									<p>{comment.text}</p>
								</div>
								<EditDeleteComment comment={comment} postId={post._id} />
							</div>
							<div className="comment-interactions">
								J'aime
								<span>{timestampParser(comment.timestamp)}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CardComments;
