import axios from "axios";

export const getdata=()=>axios.get("http://localhost:3000/todos");
export const savehttpData=(formData)=>axios.post("http://localhost:3000/todos", formData)