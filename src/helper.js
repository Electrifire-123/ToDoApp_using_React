
import { v1 as uuidv1 } from 'uuid';

export const addTodo = (inputValue, todos, setTodos, setInputValue) => {
    
    const updatedText = [{todotext: inputValue, id: uuidv1()}, ...todos];
    
   setTodos(updatedText);
    
    setInputValue('');  
  }

 export  const deleteTodo = (id, todos, setTodos) => {
    // console.log(id);
     const filteredTodos = todos.filter((i)=> i.id !== id);
    setTodos(filteredTodos);
  }

  // console.log(completed);

 export  const checkTodo = (id, completed, setCompleted) => {
    if(completed.includes(id)){
      setCompleted(completed.filter((c) => c !== id))
    }else{
      setCompleted([...completed, id]);
    }
  }

 