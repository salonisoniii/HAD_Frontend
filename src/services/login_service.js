import { myAxios } from "./helper";

export const login=(user)=>{
    return myAxios
    .post('/http://localhost:8070/his/login',user)
    .then((resonse)=>resonse.json());
}