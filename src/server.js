const app = require("./app");

const appRoutes = require("./routes/app.routes");

app.use("/", appRoutes);

const server = app.listen(3000, () => { console.log("Server listening in port 3000"); });

module.exports = server;
