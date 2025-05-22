import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete } from "react-icons/ai"

const Todo = ({text,updatemode,deleteTodo}) => {
  return (
    <div className='todo'>
    <div className='text'>{text}</div>
      <div className='icons'>
        <BiEdit className='icon' id='iconupdate' onClick={updatemode}/>
        <AiFillDelete className='icon'id='iconhover' onClick={deleteTodo}/>
      </div>
    </div>
  )
}

export default Todo
