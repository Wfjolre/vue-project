import { mutations, STORAGE_KEY } from "./mutations";
import actions from "./actions";
import plugins from "./plugin";

var state={
    todoList:JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    plugins
}