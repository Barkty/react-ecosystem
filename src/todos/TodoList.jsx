import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos = [{text: 'Hello'}, {text: 'Another todo'}]}) => {

    return (
        <div className="list-wrapper">
            <TodoForm />
            {todos.map(todo => <TodoListItem todo={todo}/>)}
        </div>
    )
}

export default TodoList;