import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
	const dispatch = useDispatch();
	const deleteQuote = () => dispatch(deletePost(props.id));

	const [deleteConfirmation, setDeleteConfirmation] = useState(false);

	const confirmDelete = () => {
		if (deleteConfirmation) {
			deleteQuote();
		}

		setDeleteConfirmation(true);
	};

	return (
		<div className="delete-card">
			<button onClick={confirmDelete} className={deleteConfirmation ? "delete-confirmation" : "delete-button"}>
				{deleteConfirmation ? (
					<p>Confirmer</p>
				) : (
					<>
						<img src="./assets/picto/trash-can-regular.svg" alt="comment" />
						<p>Supprimer le post</p>
					</>
				)}
			</button>
		</div>
	);
};

export default DeleteCard;
