import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../actions/post.actions";
import { UIdContext } from "../AppContext";

const EditDeleteComment = ({ comment, postId }) => {
	const [isAuthor, setIsAuthor] = useState(false);
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState("");

	const uid = useContext(UIdContext);
	const dispatch = useDispatch();

	const handleEdit = (e) => {
		e.preventDefault();

		if (text) {
			dispatch(editComment(postId, comment._id, text));
			setText("");
			setEdit(false);
		}
	};

	const handleDelete = () => dispatch(deleteComment(postId, comment._id));

	useEffect(() => {
		const checkAuthor = () => {
			if (uid === comment.commenterId) {
				setIsAuthor(true);
			}
		};
		checkAuthor();
	}, [uid, comment.commenterId]);

	return (
		<div className="edit-comment">
			{isAuthor && <span onClick={() => setEdit(!edit)}>...</span>}
			{isAuthor && edit && (
				<div className="edit-comment-options-container">
					<div className="edit-comment-options">
						<div className="edit">Modifier</div>
						<div className="edit">Supprimer</div>
					</div>
				</div>

				// <form action="" onSubmit={handleEdit} className="comment-edit-form">
				// 	<label htmlFor="text" onClick={() => setEdit(!edit)}>
				// 		Editer
				// 	</label>
				// 	<br />
				// 	<input type="text" name="text" onChange={(e) => setText(e.target.value)} defaultValue={comment.text} />
				// 	<br />
				// 	<div className="btn">
				// 		<span
				// 			onClick={() => {
				// 				if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
				// 					handleDelete();
				// 				}
				// 			}}
				// 		>
				// 			<img src="./assets/pictos/trash.svg" alt="delete" />
				// 		</span>
				// 	</div>
				// 	<input type="submit" value="Valider modification" />
				// </form>
			)}
		</div>
	);
};

export default EditDeleteComment;
