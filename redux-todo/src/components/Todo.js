import React, { Component } from 'react'
import styled from "styled-components";
//import PropTypes from 'prop-types'

export default class Todo extends Component {
    render() {
        const { todo, markAsCompleted, deleteTodo } = this.props;
        return (
            <SingleTodo redbg = {todo.completed}>
                <div>
                    <h3>{todo.value}</h3>
                    <p>Completed: {`${todo.completed}`}</p>
                </div>
                <button onClick = {() => markAsCompleted(todo.id)} >Mark complete</button>
                <button onClick = {() => deleteTodo(todo.id)} >Delete Todo</button>
            </SingleTodo>
        )
    }
}

const SingleTodo = styled.div `
    border: 1px solid red;
    background-color: ${complete => (complete.redbg ? "red" : "inital")};
    margin-bottom: 5px;
`


/**
 * 
 *  static propTypes = {
        prop: PropTypes
    }
 */