import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";

export class TodoForm extends Component {
    todoRef = React.createRef()
    onAddTodo = (e) => {
        e.preventDefault()
        this.props.addTodo(
          this.todoRef.current.value,
        );
      }


    render() {
        return (
            <div>
                <form onSubmit = {this.onAddTodo}>
                    <div>
                        <label htmlFor="new_todo">New Todo:</label>
                        <input type="text" ref = {this.todoRef} id = "new_todo"/>
                    </div>
                    <div>
                    <button onClick={this.onAddTodo}>Add Todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        numberOTodos: state.todos.length,
    }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);
