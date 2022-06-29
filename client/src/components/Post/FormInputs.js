import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";
import { isEmpty } from "../Utils";

const FormInputs = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [message, setMessage] = useState("");
	const [postPicture, setPostPicture] = useState(null);
	const [video, setVideo] = useState("");
	const [file, setFile] = useState();
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	const handlePost = async () => {
		if (message || postPicture || video) {
			const data = new FormData();
			data.append("posterId", userData._id);
			data.append("message", message);
			if (file) data.append("file", file);
			data.append("video", video);

			await dispatch(addPost(data));
			dispatch(getPosts());

			cancelPost();
		} else {
			alert("Veuillez entrer un message");
		}
	};

	const handlePicture = (e) => {
		setPostPicture(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
		setVideo("");
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
			let findLink = message.split(" ");
			for (let i = 0; i < findLink.length; i++) {
				if (findLink[i].includes("https://www.yout") || findLink[i].includes("https://yout")) {
					let embed = findLink[i].replace("watch?v=", "embed/");
					setVideo(embed.split("&")[0]);
					findLink.splice(i, 1);
					setMessage(findLink.join(" "));
					setPostPicture("");
				}
			}
		};

		handleVideo();
	}, [userData, message, video]);

	const closeUploadProfilPic = () => {
		props.setTextFormModification(false);
	};

	return (
		<div className="form-inputs-background">
			<div className="form-inputs-container window-container">
				<div className="form-inputs-header">
					<div></div>
					<h3>Créer une publication</h3>
					<button className="close-window" onClick={closeUploadProfilPic}>
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
							<textarea className="form-inputs-content-textarea-input" placeholder={`Quoi de neuf, ${userData.pseudo} ?`}></textarea>
						</div>
						<div className="color-emoji-container">
							<img src="./assets/picto/color-thumbnail.png" alt="color-picker" />
							{/* <img className="emoji-picker" src="./assets/picto/happy.png" alt="emoji" /> */}
						</div>
						<div className="form-inputs-content-add ">
							<h5>Ajouter à votre publication</h5>
							<ul>
								<li>
									<img className="image" src="./assets/picto/file-image-solid.svg" alt="pictures" />
								</li>
								<li>
									<img className="tag" src="./assets/picto/user-tag-solid.svg" alt="friends" />
								</li>
								<li>
									<img className="mood" src="./assets/picto/face-laugh-solid.svg" alt="emoji" />
								</li>
								<li>
									<img className="location" src="./assets/picto/location-dot-solid.svg" alt="location" />
								</li>
								<li>
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
