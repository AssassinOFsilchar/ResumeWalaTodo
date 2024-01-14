import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

 
const TodoItems = () => {
  const {todoItems}=useContext(TodoItemsContext);
  const {delteItem}=useContext(TodoItemsContext);
  console.log(todoItems)
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.dueDate + item.name}
          todoName={item.name}
          todoDate={item.dueDate}
           
        />
      ))}
    </div>
  );
};

export default TodoItems;
