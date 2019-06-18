import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class Todo extends Component {
    render() {
        const { todo } = this.props;
        return (
            <div>
                <div>
                    <h3>{todo.value}</h3>
                    <p>Completed: {`${todo.completed}`}</p>
                </div>
                <button>Mark complete</button>
            </div>
        )
    }
}


/**
 * 
 *  static propTypes = {
        prop: PropTypes
    }
 */