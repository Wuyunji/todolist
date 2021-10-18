import React from 'react'
import './index.css'

export default function Footer(props) {
  const {todos, setTodos} = props
  const length = todos.length
  const doneLength = todos.reduce((pre, now)=>{
    return pre + now.done
  }, 0)

  // 点击全选按钮切换状态
  function handleInputChange(event){
    const oldTodos = todos
    const newTodos = oldTodos.map((todo)=>{
      todo.done = event.target.checked
      return todo
    })
    setTodos(newTodos)
  }

  // 点击‘删除已完成任务’按钮后删除对应数据
  function handleButtonClick(){
    const oldTodos = todos
    const newTodos = oldTodos.filter((todo)=>{
      return !todo.done
    })
    setTodos(newTodos)
  }

  return (
    <div>
        <input type="checkbox" checked={doneLength === length && length} onChange={handleInputChange}/>
        <span>已完成 {doneLength} / 全部 {length} </span>
        <button className="deleteDone" onClick={handleButtonClick}>删除已完成任务</button>
    </div>
  )
}
