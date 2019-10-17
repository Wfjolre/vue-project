export const STORAGE_KEY = 'todos-vuejs'

if(navigator.userAgent.indexOf('PhantomJS'>-1)){
    window.localStorage.clear();
}
export const mutations = {
    addTodo(state,todo){
        state.todoList.push(todo)
    },
    removeTodo(state,todo){
        state.todoList.splice(state.todoList.indexOf(todo),1)
    },
    editTodo(state,{todo, text = todo.text, done= todo.done}){
        todo.text=text;
        todo.done = done;
    }
}