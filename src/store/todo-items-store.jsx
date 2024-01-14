import React, { useReducer } from "react";
import { createContext } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
// will give us autocomplete
// will be exported to many places so written with caps, will be used as component as well, basically component ke karan hi caps meh likha haii
// above part is context creation part
// import { createContext } from "react"; ...had to be done to use it






const todoItemsReducer = (currTodoItems, action) => {
  // curr state bhi milta hai, basically last updated value of currTodoItems
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
// it shld be pure function
// bahar ke chizo ko ched chad nehi krte, no side effects

const TodoItemsContextProvider = ({ children }) => {
  // basically yeh children aur kuch nehi, buss App.jsx ka maal sab hai
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};
export default TodoItemsContextProvider;
// value ke jagah purah object bhej diya hai maine bhai
// yeh ek mast template jaisa hai, jisme you are separating the business logic from UI
// use this extensively, and this should be your goal to make your react JS projects like this
// empty array bhi truthy value return krta hai
// state declare krke context provider ko dediya maine
// edit hone peh purah context re paint hoega
// context API jab bohot level, use ho tab

// useReducer
// jab choota sah change ho tab
// state ko update and maintain krne ka logic tough ho jaye tab use kre
// reducer: a pure fxn that takes current state and action and returns a new state
// action: an object describing what happened
