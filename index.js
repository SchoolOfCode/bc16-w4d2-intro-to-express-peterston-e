import express from "express";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
	res.send("Hello world!");
});

app.get("/api", function (req, res) {
	res.send({
		small: "objects",
		are: "easier",
		to: "manage",
		so: "are",
		problems: " ",
	});
});

app.get("/people", function (req, res) {
	res.json(obj);
});

const obj = {
	key1: "this string",
	name: "fredrickson",
	occupation: "post",
};

app.listen(port, function () {
	console.log(`listening on port ${port}`);
});
