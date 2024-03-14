const http = require("http");
const readFile = require("fs");

const myfiles = [];

process.argv.forEach((diretorio) => {
  readFile.readdir(diretorio, (err, files) => {
    if (files) {
      files.forEach((file) => {
        myfiles.push(file);
      });
    }
  });
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  myfiles.forEach((file) => {
    res.write(file + "<br/>");
  });
});

server.listen(3333);
