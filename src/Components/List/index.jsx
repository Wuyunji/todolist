import React from 'react'
import ListItem from './ListItem'
import './index.css'

export default function List(props) {
  return (
    <ul className="list">
      {
        props.todos.map((todo)=>{
          return <ListItem key={todo.id} todo={todo} {...props}></ListItem>       
        })
      }
    </ul>
  )
}
