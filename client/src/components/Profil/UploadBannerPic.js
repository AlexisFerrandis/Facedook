import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadBannerPicture } from "../../actions/user.actions";

const UploadBannerPic = (props) => {
	const [file, setFile] = useState();
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userReducer);

	const handlePicture = (e) => {
		e.preventDefault();

		const data = new FormData();
		data.append("name", userData.pseudo);
		data.append("userId", userData._id);
		data.append("file", file);

		dispatch(uploadBannerPicture(data, userData._id));
	};

	const closeUploadBannerPic = () => {
		props.bannerPicModification(false);
	};

	return (
		<div>
			<div className="upload-profil-pic-container">
				<div className="upload-profil-pic window-container">
					<form action="" onSubmit={handlePicture} className="upload-pic">
						<h3>Mettre à jour la photo de couverture</h3>
						<button className="close-window" onClick={closeUploadBannerPic}>
							&#9587;
						</button>

						<div className="grey-separator"></div>

						<div className="upload-pic-container">
							{file ? (
								<div className="img-submit">
									<img className="img-preview img-preview-banner" src={URL.createObjectURL(file)} alt="couv-pic" />
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
		</div>
	);
};

export default UploadBannerPic;
