import axios from "axios";

interface Todo {
  id: Number;
  title: String;
  completed: Boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/4";

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: Number, title: String, completed: Boolean) => {
  console.log(`
  id: ${id}
  title: ${title}
  completed: ${completed}
  `);
}