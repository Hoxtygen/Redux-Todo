import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionDispatchers from "../actions/todoAction"
import Todo from './Todo';

//import PropTypes from 'prop-types'

export class TodoList extends Component {
    render() {
        const todos = this.props.todos || []
        return (
            <div>
                <h2>I contain all the list of todos, and they all get mapped in here.</h2>

                {
                    todos.map(todo => (
                        <Todo
                            key = {todo.id}
                            todo = {todo}
                         />
                    ))
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    // STEP 9: FLESH OUT
    return {
      todos: state.todos,
    };
  }

  export default connect(mapStateToProps, actionDispatchers)(TodoList)
// static propTypes = {
//     prop: PropTypes
// }
