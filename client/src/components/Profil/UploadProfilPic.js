import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadProfilPic = (props) => {
	const [file, setFile] = useState();
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userReducer);

	const handlePicture = (e) => {
		// e.preventDefault();

		const data = new FormData();
		data.append("name", userData.pseudo);
		data.append("userId", userData._id);
		data.append("file", file);

		dispatch(uploadPicture(data, userData._id));
	};

	const closeUploadProfilPic = () => {
		props.profilPicModification(false);
	};

	return (
		<div className="upload-profil-pic-container">
			<div className="upload-profil-pic window-container">
				<form action="" onSubmit={handlePicture} className="upload-pic">
					<h3>Mettre à jour la photo de profil</h3>
					<button className="close-window" onClick={closeUploadProfilPic}>
						&#9587;
					</button>

					<div className="grey-separator"></div>

					<div className="upload-pic-container">
						{file ? (
							<div className="img-submit">
								<img className="img-preview" src={URL.createObjectURL(file)} alt="profil-pic" />
								<input type="submit" value="Enregistrer" />
							</div>
						) : (
							<>
								<label htmlFor="file">+ Importer une photo</label>
								<input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => setFile(e.target.files[0])} />
								<br />
							</>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default UploadProfilPic;
