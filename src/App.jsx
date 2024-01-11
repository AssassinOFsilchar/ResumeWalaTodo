import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName"; 
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import thatgif from "./assets/gify.gif"
function App() { 
  const [todoItems, settodoItems] = useState([])

  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added : ${itemName} Date : ${itemDueDate}`)
    const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}]
    settodoItems(newTodoItems)

  }

  const handleDeleteItem=(todoItemName)=>{
    console.log(`Item Deleted : ${todoItemName}`)
    const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName)
    settodoItems(newTodoItems)
  }
// used filter to delete
// final product meh console.log hata dena chahiye

// react - icon library
// npm install react-icons -save
// import {IconName} from "react-icons/fc";
  return (
    <>
    <img src={thatgif} alt="" />
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      {
        todoItems.length===0 && 
      <WelcomeMessage/> 
      }
    </center>
    </>
  );
}
// method ka naam handle kr diya
export default App;
