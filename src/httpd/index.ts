import axios from "axios";

const api = axios.create({
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  baseURL: "http://localhost:3000",
});
// 401 -> accesstoken expired

export const registerUser = (data:any) =>{
    api.post("/register",).then((resp)=>{

    })
    
    return 0;
}



const 