import { connect } from "react-redux";
import { createTodo } from "./actions";
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

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect()(TodoList);