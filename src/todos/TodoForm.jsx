import { useState } from "react";

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="form">
            <input 
            type='text' 
            className="todo-input"
            placeholder="Type your new todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
            <button type="button" className="todo-button">Create Todo</button>
        </div>
    )
}
export default TodoForm;