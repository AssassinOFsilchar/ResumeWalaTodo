import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate}) => {
  const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="container text-left thisBody">
      <div className="row kg-row thatBody">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button"
          onClick={()=>{
            deleteItem(todoName)
          }}>
           <MdDeleteForever size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
