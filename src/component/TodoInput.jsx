import React, {useState} from 'react'

export default function TodoInput({setTodos, inputValue, setInputValue, handleAddTodos}) {

    
  return (
        <header><p className='small-header'>Add Todos</p>
            <input type="text" placeholder='enter input please' value={inputValue}  onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => handleAddTodos(inputValue)}>Click to Add</button>
        </header>
  )
}
