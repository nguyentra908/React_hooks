
import { useState } from 'react';
import './App.scss';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList]=useState( [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
   ]
   );

   function handleTodoClick(todo) {
     console.log(todo);
     const index=todoList.findIndex(x=>x.id===todo.id);
     if(index<0) return;
     //khi thay đổi state thì tạo mảng mới
     //... giữ nguyên mảng cũ
     const newTodoList=[...todoList];
     newTodoList.splice(index,1);
     setTodoList(newTodoList);     
   }
//
   function handleTodoFormSubmit(formValues) {
     console.log('Form submit:', formValues);
     //add new todo to curent todo list
    const newTodo = {
      id:todoList.length +1,
      ...formValues,
    }

     const newTodoList=[...todoList];
     newTodoList.push(newTodo);
     setTodoList(newTodoList);
   }

  return (
    <div className="App">
    {/* <ColorBox/> */}
    <TodoForm onSubmit={handleTodoFormSubmit} />
    <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
