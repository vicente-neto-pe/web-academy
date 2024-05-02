import express from "express";
import dotenv from "dotenv";
import { validateEnv } from "./utils/validateEnv";
import { PrismaClient} from "@prisma/client";
import router from "./routes";
import cookieParser from "cookie-parser";
import setLangCookie from "./middlewares/setLangCookie";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import { MySessionData } from "./types/sessionData";


declare module "express-session" {
  interface SessionData extends MySessionData{}
}

const app = express();
dotenv.config();
validateEnv();
app.use(
  session({
    genid: (req) => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());
app.use([router]);
const PORT = process.env.PORT || 3001;
export const prismaCliente = new PrismaClient();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
