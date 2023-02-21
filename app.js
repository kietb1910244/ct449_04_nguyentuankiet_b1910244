const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(rep, res) => {
	res.json({ message: "Welcom to contact book application. "});
});

module.exports = app;
