import { STORAGE_KEY } from "./mutations";
import createLogger from "vuex/dist/logger";


const localStoragePlugin = store => {
    store.subscribe((mutation,{todoList})=>{
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList))
    })
}

//export default [localStoragePlugin]
export default process.env.NODE_ENV !== 'production'?[createLogger(),localStoragePlugin]:[localStoragePlugin]