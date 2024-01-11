import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName"; 
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Buy Toffee",
      dueDate: "14/10/23",
    },
    {
      name: "Like this video",
      dueDate: "24/10/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}
export default App;
