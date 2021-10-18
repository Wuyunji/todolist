import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';
import {useState} from 'react';

const initTodos = [
  {id:"001", title:'吃饭', done:false},
  {id:"002", title:'睡觉', done:false},
  {id:"003", title:'学习', done:false},
  {id:"004", title:'想宝宝', done:true}
]

function App() {
  const [todos, setTodos] = useState(initTodos)

  return (
    <div id="app">
      <Header todos={todos} setTodos={setTodos}></Header>
      <List todos={todos} setTodos={setTodos}></List>
      <Footer todos={todos} setTodos={setTodos}></Footer>
    </div>
  );
}

export default App;
