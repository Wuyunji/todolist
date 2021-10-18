import React from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default function Header(props) {
  const {todos, setTodos} = props
  
  //按回车添加新todo
  function handleKeyUp(event){
    if(event.key !== 'Enter') return
    if(event.target.value.trim() === '') return
    const obj = {
      id : nanoid(),
      title : event.target.value,
      done: false
    }
    const oldTodos = todos
    const newTodos = [obj, ...oldTodos]
    setTodos(newTodos)
    event.target.value = ''
  }

  return (
    <div id="header">
      <input type="text" placeholder="请输入内容 按回车键提交" onKeyUp={handleKeyUp}/>
    </div>
  )
}
