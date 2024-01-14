 
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import TodoItemsContextProvider  from "./store/todo-items-store";
import { useReducer } from "react";

// it shld be pure function
// bahar ke chizo ko ched chad nehi krte, no side effects

const todoItemsReducer = (currTodoItems, action) => {
  // curr state bhi milta hai
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

function App() {
  // const [todoItems, settodoItems] = useState([]);
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

    // // prop drilling- jab andar tak props pass ho rhe ho

    // settodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
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
  // state declare krke context provider ko dediya maine
  // edit hone peh purah context re paint hoega
  // context API jab bohot level use ho tab

  // useReducer
  // jab choota sah change ho tab
  // state ko update and maintain krne ka logic tough ho jaye tab use krej
  // reducer: a pure fcn that takes current state and action and returns a new state
  // action: an object describing wwhat happened
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <TodoItems />
          {<WelcomeMessage />}
        </center>{" "}
      </TodoItemsContextProvider>
    </>
  );
}
// empty array bhi truthy value return krta hai
export default App;
