import { applyMiddleware, compose, createStore } from "redux";
import { rootReduser } from "../reducers";


export const store=createStore(rootReduser)
// export const store=createStore(rootReduser,compose(applyMiddleware(thunk)))

store.subscribe(()=>{
  console.log("store",store.getState())  
})