import  React, {useState} from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className='main'>
        <h2>My Todo List</h2>
            {todos.map((todo, todoIndex) => (
                <TodoCard {...props} index={todoIndex} key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            ))}
    </ul>
  )
}
