import axios from "axios";
/*
    https://jsonplaceholder.typicode.com/todos
    https://jsonplaceholder.typicode.com/todos/1
*/

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id : number;
    title : string;
    completed : boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id , title , completed);
})
const logTodo = (id : number, title : string , completed : boolean ) => {
    console.log(`
    The todo with id: ${id}
    Has a title: ${title}
    Is finished: ${completed}
    `)
}