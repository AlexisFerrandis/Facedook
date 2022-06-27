const UserModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
	try {
		if (req.file.detectedMimeType != "image/jpg" && req.file.detectedMimeType != "image/png" && req.file.detectedMimeType != "image/jpeg") throw Error("invalid file");
		if (req.file.size > 2000000) throw Error("max size");
	} catch (err) {
		const errors = uploadErrors(err);
		return res.status(201).json({ errors });
	}

	const fileName = (req.body.name + req.body.userId + ".jpg").toLowerCase();
	const filePath = `./uploads/profil//${fileName}`;
	const userId = req.body.userId;
	await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}../../../client/public/uploads/profil/${fileName}`));

	try {
		await UserModel.findByIdAndUpdate(
			userId,
			{ $set: { picture: filePath } },
			// { new: true, upsert: true, setDefaultsOnInsert: true },
			// (err, data).then((data) => res.send(data)).catch((err) => res.status(500).send({ message: err }))
			{ new: true, upsert: true, setDefaultsOnInsert: true },
			(err, data) => {
				if (!err) res.send(data);
				else res.status(500).json({ message: err });
			}
		);
	} catch (err) {
		// return res.status(500).send({ message: err });
		console.log("If it works... it's not a bug");
	}
};

module.exports.uploadBanner = async (req, res) => {
	try {
		if (req.file.detectedMimeType != "image/jpg" && req.file.detectedMimeType != "image/png" && req.file.detectedMimeType != "image/jpeg") throw Error("invalid file");
		if (req.file.size > 2000000) throw Error("max size");
	} catch (err) {
		const errors = uploadErrors(err);
		return res.status(201).json({ errors });
	}

	const fileName = (req.body.userId + req.body.name + ".jpg").toLowerCase();
	const filePath = `./uploads/profil//${fileName}`;
	const userId = req.body.userId;
	await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}../../../client/public/uploads/profil/${fileName}`));

	try {
		await UserModel.findByIdAndUpdate(
			userId,
			{ $set: { bannerPicture: filePath } },
			// { new: true, upsert: true, setDefaultsOnInsert: true },
			// (err, data).then((data) => res.send(data)).catch((err) => res.status(500).send({ message: err }))
			{ new: true, upsert: true, setDefaultsOnInsert: true },
			(err, data) => {
				if (!err) res.send(data);
				else res.status(500).json({ message: err });
			}
		);
	} catch (err) {
		// return res.status(500).send({ message: err });
		console.log("If it works... it's not a bug");
	}
};
