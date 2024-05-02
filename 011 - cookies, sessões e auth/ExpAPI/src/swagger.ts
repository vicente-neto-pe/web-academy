import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config();

const doc = {
  info: {
    title: "API da Loja virtual",
    description: "Documentação da API",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};

const outputFile = "./swagger-output.json";
const routes = ["./src/routes/index.ts"];
swaggerAutogen()(outputFile, routes, doc);
