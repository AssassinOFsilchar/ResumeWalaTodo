import React, { useState } from "react";

const AddTodo = ({onNewItem}) => {

  const [todoName, settodoName] = useState("")
  const [dueDate, setdueDate] = useState("")
// prevented unnecessary cycle

const handleNameChange=(event)=>{
  settodoName(event.target.value)
}
const handleDateChange=(event)=>{
  setdueDate(event.target.value)
}

const handleAddButtonClicked=()=>{
  onNewItem(todoName,dueDate)
  setdueDate("")
  settodoName("")
  // blank change krne seh undefined set ho rha
}

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          
          onClick={ 
            handleAddButtonClicked
          }

          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
