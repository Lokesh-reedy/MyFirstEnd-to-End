import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
  function App() {
const [todos,setTodo]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(async function(res){
      const response=await res.json();
      setTodo(response.Alltodos); })
  })///after the state gets updated the app re-renders control goes up again,so fetch will be called again
// */in response json response.todos has array of todos

  return (
    <div>
       <CreateTodo></CreateTodo>
       <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
