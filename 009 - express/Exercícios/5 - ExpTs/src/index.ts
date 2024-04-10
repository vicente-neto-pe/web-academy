import express, { Request, Response } from "express";
import validateEnv from "./utils/validateEnv";
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

validateEnv();
const app = express();

const logMiddleware =(logType: "simple"|"complet")=>{
  if(!process.env.LOG_FOLDER) return;
  const accessLogStream = fs.createWriteStream(path.join(process.env.LOG_FOLDER, 'access.log'), { flags: 'a' })
  if(logType==="simple"){
    app.use(morgan(':date[web] :url  :method', { stream: accessLogStream }))
  }else{
    app.use(morgan(':date[web] :url  :method :http-version :user-agent'))
  }
}

logMiddleware("simple");

const PORT = process.env.PORT || 3333;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
