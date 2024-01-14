import React, { useContext } from 'react'
import styles from './WelcomeMessage.module.css'
import { TodoItemsContext } from '../store/todo-items-store';
const WelcomeMessage = () => {
  
  const {todoItems}=useContext(TodoItemsContext);
  // this is the best example of the use of context APIs
  return (
    <>
    {todoItems.length===0 &&
      <p className={styles.welcome}>Enjoy Your Day</p>}
    </>
  )
}

export default WelcomeMessage
