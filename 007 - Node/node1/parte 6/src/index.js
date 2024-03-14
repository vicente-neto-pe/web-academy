const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const { createLink } = require("./utils/createLink");
const { accessFileFromURL } = require("./utils/accessFileFromURL");

const PORT = process.env.PORT ?? 9999;
const myfiles = [];

process.argv.forEach((diretorio) => {
  fs.readdir(diretorio, (err, files) => {
    if (files) {
      files.forEach((file) => {
        myfiles.push(file);
      });
    }
  });
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url !== "/" && req.url !== "/robots.txt" && req.url !== "/favicon.ico") {
    accessFileFromURL(req.url).then(result => {
      result.forEach(string => {
        res.write(string);
      });
      res.end();
    }).catch(error => {
      console.error(error);
      res.end();
    });
  } else {
    myfiles.forEach((file) => {
      res.write(createLink(file));
    });
    res.end();
  }
});

console.log(`Servidor escutando na porta ${PORT}`);
server.listen(PORT);
