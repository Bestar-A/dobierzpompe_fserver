import express from "express";
import cors from "cors";
import database from "./dummy.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/get_data", (req, res) => {
	const requestData = req.body;

	console.log("Received data:", requestData);

	const idx = Math.round(Math.random() * 4.9);
	res.send(database[idx]);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
