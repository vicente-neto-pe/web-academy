import http, { createServer } from "http";
import dotenv from "dotenv";
import { getFileContent } from "./utils/getFileContent.js";
import { generateLorem } from "./utils/generateLorem.js";

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT ?? 9999;

const htmlContent = getFileContent("index.html");
const cssContent = getFileContent("style.css");
const jsContent = getFileContent("main.js");

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  if(req.url === "/robots.txt" || req.url === "/favicon.ico") res.end()
  else if (req.url === "/"){
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    Promise.resolve(htmlContent).then(content=>{
      res.write(content);
      res.end();
    })

  }else if(req.url === "/style.css"){
    res.writeHead(200, { "Content-Type": "text/css;charset=utf-8" });
    Promise.resolve(cssContent).then(content=>{
      res.write(content);
      res.end();
    })

  }else if(req.url === "/main.js"){
    res.writeHead(200, { "Content-Type": "application/javascript;charset=utf-8" });
    Promise.resolve(jsContent).then(content=>{
      res.write(content);
      res.end();
    })
  } else {
    const url = req.url.replace("/", "")
    if(Number(url)){
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(generateLorem(url));
      res.end();
    }   
  }
});

console.log(`Servidor escutando na porta ${PORT}`);
server.listen(PORT);
