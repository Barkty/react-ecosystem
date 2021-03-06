import { connect } from "react-redux";
import { removeTodo } from "./actions";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos = [], onRemovePressed}) => {

    return (
        <div className="list-wrapper">
            <TodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);