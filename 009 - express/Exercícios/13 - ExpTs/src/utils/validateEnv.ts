import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    BACKEND_URL: str(),
  });
};
export default validateEnv;
