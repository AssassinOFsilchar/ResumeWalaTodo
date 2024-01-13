import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todoName, todoDate ,onDeleteClick}) => {
  return (
    <div className="container text-left thisBody">
      <div className="row kg-row thatBody">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button"
          onClick={()=>{
            onDeleteClick(todoName)
          }}>
           <MdDeleteForever size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
