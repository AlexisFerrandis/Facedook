const mongoose = require("mongoose");

mongoose
	.connect(`mongodb+srv://${process.env.DB_USER_PASS}@facedook.sayqsnw.mongodb.net/facedook`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Fail to connect to mongoDb", err));
