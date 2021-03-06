// const { exec } = require("child_process");

// const port = process.env.PORT || 3000;

// const command = `json-server --watch db.json --port ${port}`;

// exec(command, (err, stdout, stderr) => {
//   if (err) {
//     console.log("Error running exec", err);
//     return;
//   }
//   console.log("stdout:", stdout);
//   console.log("stderr:", stderr);
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);