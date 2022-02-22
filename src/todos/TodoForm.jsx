import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";

const TodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="form">
            <input 
            type='text' 
            className="todo-input"
            placeholder="Type your new todo here..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
            <button 
                type="button"
                onClick={()=> {
                    const isDuplicate = todos.some(todo => todo.text === inputValue);
                    if(!isDuplicate) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }} 
                className="todo-button">
                    Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);