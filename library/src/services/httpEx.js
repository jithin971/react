import axios from "axios";

export const getdata=()=>axios.get("https://jsonplaceholder.typicode.com/todos");
export const savehttpData=(formData)=>axios.post("https://jsonplaceholder.typicode.com/posts", formData)