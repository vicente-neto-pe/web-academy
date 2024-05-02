import {cleanEnv, port, str} from "envalid";

export function validateEnv(){
    cleanEnv(process.env,{
        PORT: port(),
        NODE_ENV: str()
    })
}