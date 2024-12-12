import { useState, useEffect } from 'react'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: 
      newList
    }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    setInputValue('');
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  // Alternative version of handleEditTodos
  // function handelEditTodos(index){
  //   const editTodo = todos.filter((todo, todoIndex) => {
  //     return todoIndex === index
  //   })
  //   setInputValue(editTodo);
  //   handleDeleteTodos(index)
  // }

  function handelEditTodos(index){
    const editTodo = todos[index]
    setInputValue(editTodo);
    handleDeleteTodos(index)
  }

  // useEffect(() => {
  //   if (!localStorage){
  //     return;
  //   }

  //   let localTodos = localStorage.getItem('todos');
    
  //   if (!localTodos){
  //     return
  //   }

  //   localTodos = JSON.parse(localTodos).todos
  //   setTodos(localTodos);

  // },[])

  return (
    <>
     <h1>To-Do List</h1>
      <TodoInput 
        handleAddTodos={handleAddTodos} 
        setTodos={setTodos} 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
      />

      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        handleDeleteTodos={handleDeleteTodos} 
        handleEditTodos={handelEditTodos} 
      />
    </>
  )
}

export default App
