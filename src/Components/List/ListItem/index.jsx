import React from 'react'
import './index.css'

export default function ListItem(props) {
  const {todo, todos, setTodos} = props
  
  // 点击按钮删除对应的一条数据
  function handleDelete(id){
    return ()=>{
      let title = undefined
      const newTodos = todos.filter((item)=>{
        title = item.title
        return id !== item.id
      })
      if(window.confirm(`宝宝 你确定要删除 "${title}" 吗？`)){
        setTodos(newTodos)
      }
    }
  }

  // 点击每条数据前的选择框后切换状态
  function handleChange(id){
    return (event)=>{
      const oldTodos = todos
      const newTodos = oldTodos.map((todo)=>{
        if(todo.id === id){
          todo.done = event.target.checked
        }
        return todo
      })
      setTodos(newTodos)
    }
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.done} onChange={handleChange(todo.id)}/>
      <span>{todo.title}</span>
      <button className="deleteBtn" onClick={handleDelete(todo.id)}>删除</button>
    </li>
  )
}
