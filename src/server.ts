import app from "./app";

const port = process.env.PORT;

const server = app.listen(port, () => {
	console.log(`Server is listing on port ${port}`);
});
server.on("error", (e) => console.error("Error", e));
