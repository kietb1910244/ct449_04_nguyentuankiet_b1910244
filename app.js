const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(rep, res) => {
	res.json({ message: "Welcom to contact book application. "});
});

module.exports = app;
app.use("/api/contacts", contactsRouter);
module.exports = app;