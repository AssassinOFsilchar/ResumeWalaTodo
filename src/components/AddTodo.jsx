import React, { useContext, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
const AddTodo = () => {

  // import { TodoItemsContext } from "../store/todo-items-store";
  // had to be done to use it
  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement=useRef("");
  const dueDateElement=useRef("");
 
const handleAddButtonClicked=(e)=>{
  
  e.preventDefault();
  const todoName=todoNameElement.current.value;
  const dueDate=dueDateElement.current.value; 
  todoNameElement.current.value='';
  dueDateElement.current.value='';
  addNewItem(todoName,dueDate)
  
   
}

  return (
    <div className="container text-center">
      <form className="row kg-row" 
        onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" 
  ref={todoNameElement}
          placeholder="Enter Todo Here"    />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" 
          >
           <IoIosAddCircleOutline size={30}/>
          </button>
        </div>
      </form>
    </div>
  );
}; 
export default AddTodo;
