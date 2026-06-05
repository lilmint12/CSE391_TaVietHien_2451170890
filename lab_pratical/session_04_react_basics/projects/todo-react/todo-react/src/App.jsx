import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDoList from "./components/ToDoList"
import ToDoStats from './components/ToDoStats'
import ToDoForm from './components/ToDoForm'
function App() {
    const [todos,setTodos] = useState([
      { id: 1, text: "Học HTML", completed: false },
      { id: 2, text: "Học Bootstrap", completed: true },
      { id: 3, text: "Hiểu tư duy Component", completed: false }
    ]);
    const addTodo =(newTodo)=>{
      setTodos([...todos, newTodo])
    }
  // Trong App.jsx
    const deleteTodo = (id) => {
      console.log("delete", id);

      setTodos(todos.filter(todo => todo.id !== id));
    };
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">

            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Todo App</h4>
              </div>
              <ToDoForm onAddTodo={addTodo}/>
              <ToDoStats todos={todos} />
              <ToDoList
                  todos={todos}
                  onDeleteToDo={deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
