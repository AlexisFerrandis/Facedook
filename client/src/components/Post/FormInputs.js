import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";
import { isEmpty } from "../Utils";

import Picker from "emoji-picker-react";

const FormInputs = (props) => {
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	const [addPostPic, setAddPostPic] = useState(false);
	const [addPostVideo, setAddPostVideo] = useState(false);

	const [isLoading, setIsLoading] = useState(true);
	const [message, setMessage] = useState("");
	const [postPicture, setPostPicture] = useState(null);
	const [video, setVideo] = useState("");
	const [file, setFile] = useState();

	//emoji
	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [addPostEmoji, setAddPostEmoji] = useState(false);
	const onEmojiClick = (event, emojiObject) => {
		setMessage(message + emojiObject.emoji);
		setChosenEmoji(emojiObject);
	};

	const handlePost = async (e) => {
		e.preventDefault();

		if (message || postPicture || video) {
			const data = new FormData();
			data.append("posterId", userData._id);
			data.append("message", message);
			if (file) data.append("file", file);
			data.append("video", video);

			await dispatch(addPost(data));
			dispatch(getPosts());

			cancelPost();
			props.textFormModification(false);
		} else {
			alert("Veuillez entrer un message");
		}
	};

	const cancelPic = () => {
		setAddPostPic(false);
		setFile("");
	};

	const cancelVideo = () => {
		setAddPostVideo(false);
		setFile("");
		setVideo("");
	};

	const cancelEmojiPicker = () => {
		setAddPostEmoji(false);
	};

	const cancelPost = () => {
		setMessage("");
		setPostPicture("");
		setVideo("");
		setFile("");
	};

	useEffect(() => {
		if (!isEmpty(userData)) setIsLoading(false);

		const handleVideo = () => {
			let findLink = video.split(" ");
			for (let i = 0; i < findLink.length; i++) {
				if (findLink[i].includes("https://www.yout") || findLink[i].includes("https://yout")) {
					let embed = findLink[i].replace("watch?v=", "embed/");
					setVideo(embed.split("&")[0]);
					findLink.splice(i, 1);
					// setMessage(findLink.join(" "));
					setPostPicture("");
				}
			}
		};

		handleVideo();
	}, [userData, video]);

	// img
	const addPostPicHandler = () => {
		setAddPostPic(!addPostPic);
		setAddPostVideo(false);
		setVideo("");
		setAddPostEmoji(false);
	};

	// video
	const addPostVideoHandler = () => {
		setAddPostVideo(!addPostVideo);
		setAddPostPic(false);
		setPostPicture("");
		setAddPostEmoji(false);
	};

	// emoji
	const addEmojiPostHandler = () => {
		setAddPostEmoji(!addPostEmoji);
		setAddPostPic(false);
		setPostPicture("");
	};

	// close window
	const closePostInputsWindow = () => {
		props.textFormModification(false);
	};

	return (
		<div className="form-inputs-background">
			<div className="form-inputs-container window-container">
				<div className="form-inputs-header">
					<div></div>
					<h3>Créer une publication</h3>
					<button className="close-window" onClick={closePostInputsWindow}>
						&#9587;
					</button>
				</div>
				<div className="user-informations">
					<NavLink to="/profil">
						<div className="user-pic">
							<img className="user-pic" src={userData.picture} alt="user-pic" />
						</div>
					</NavLink>
					<div className="user-name">
						<h5>{userData.pseudo}</h5>
						<div className="public-target">
							<img src="./assets/picto/user-group-solid.svg" alt="friends" />
							<p>Amis &#9207;</p>
						</div>
					</div>
				</div>

				<div className="form-inputs-content">
					<form action="" onSubmit={handlePost} className="upload-post">
						<div className="form-inputs-content-textarea">
							<textarea name="message" id="message" placeholder={`Quoi de neuf, ${userData.pseudo} ?`} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
						</div>
						{addPostPic ? (
							<div className="form-media-preview">
								<div className="form-media-preview-container">
									<div className="close-window-secondary-edition" onClick={cancelPic}>
										&#9587;
									</div>
									{file ? (
										<div className="img-preview-container">
											<img className="img-preview-visible" src={URL.createObjectURL(file)} alt="post-pic" />
										</div>
									) : (
										<>
											<div className="picto-container">
												<img className="picto" src="./assets/picto/square-plus-solid.svg" alt="add-pic" />
											</div>
											<label htmlFor="file">
												<br />
												<br />
												<br />
												Ajouter une photo
											</label>
											<input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => setFile(e.target.files[0])} />
										</>
									)}
								</div>
							</div>
						) : (
							<div className="color-emoji-container">
								<img src="./assets/picto/color-thumbnail.png" alt="color-picker" />
								{/* <img className="emoji-picker" src="./assets/picto/happy.png" alt="emoji" /> */}
							</div>
						)}

						{addPostVideo ? (
							<div className="form-video-preview">
								<div className="form-video-preview-container">
									<div className="close-window-secondary-edition" onClick={cancelVideo}>
										&#9587;
									</div>
									{video ? (
										<div className="video-preview-container">{video && <iframe src={video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video}></iframe>}</div>
									) : (
										<>
											<img className="video-picto" src="./assets/picto/video-solid.svg" alt="video" />
											<input name="video-link" className="video-link" id="videoLink" placeholder="Intégrer un lien" onChange={(e) => setVideo(e.target.value)} value={video} type="text" />
										</>
									)}
								</div>
							</div>
						) : null}

						{addPostEmoji ? (
							<div className="emoji-picker-container">
								<div className="close-window-secondary-edition" onClick={cancelEmojiPicker}>
									&#9587;
								</div>
								<Picker
									onEmojiClick={onEmojiClick}
									groupNames={{
										smileys_people: "Smileys",
										animals_nature: "Animaux et nature",
										food_drink: "Boissons et aliments",
										travel_places: "Voyage et destinations",
										activities: "Activités",
										objects: "Objets",
										symbols: "Symboles",
										flags: "fun with flags",
										recently_used: "Utilisé récemment",
									}}
								/>
							</div>
						) : null}

						<div className="form-inputs-content-add ">
							<h5>Ajouter à votre publication</h5>
							<ul>
								<li onClick={addPostPicHandler}>
									<img className="image" src="./assets/picto/file-image-solid.svg" alt="pictures" />
								</li>
								<li>
									<img className="tag" src="./assets/picto/user-tag-solid.svg" alt="friends" />
								</li>
								<li onClick={addEmojiPostHandler}>
									<img className="mood" src="./assets/picto/face-laugh-solid.svg" alt="emoji" />
								</li>
								<li>
									<img className="location" src="./assets/picto/location-dot-solid.svg" alt="location" />
								</li>
								<li onClick={addPostVideoHandler}>
									<img className="video" src="./assets/picto/video-solid.svg" alt="video" />
								</li>
							</ul>
						</div>
						<div className="form-inputs-submit">
							<input type="submit" value="Publier" className="submit-btn" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormInputs;
