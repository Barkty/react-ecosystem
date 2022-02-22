import './Todo.css';

const TodoListItem = ({todo, onRemovePressed}) => {

    return (
        <div className="todo-container">
            <h3>{todo.text}</h3>
            <div className="button-container">
                <button className="complete-button">Mark as complete</button>
                <button className="remove-button" onClick={()=> onRemovePressed(todo.text)}>Delete</button>
            </div>
        </div>
    )
}
export default TodoListItem;