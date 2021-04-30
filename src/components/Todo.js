import React, { Component } from 'react';
import './Todo.css';
import List from './List';
import {v4 as uuidv4} from "uuid";


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: []
        };
    }

    handleOnSubmit = e => {
        // Prevent default to avoid the actual form submit...
        e.preventDefault();
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        // eslint-disable-next-line no-undef
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            });
        }
    };


    handleOnChange = e => {
        const { target: { value } } = e;
        // Updating our task state with the input value...
        this.setState({
            task: value
        });
    };

    componentWillMount() {
// Setting default tasks...
        this.setState({
    items: [
        {
            id: uuidv4(),
            task: "Learn some coding",
            completed: false
        }
    ]
})
    }

    markAsCompleted = id => {
// Finding the task by id...
        const foundTask = this.state.items.find(
            task => task.id === id
        );

// Updating the completed status...
        foundTask.completed = true;
// Updating the state with the new updated task...
        this.setState({
            items: [
                ...this.state.items,
            ]
        });
    };

    removeTask = id => {
// Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );
// Updating items state...
        this.setState({
            items: filteredTasks
        });
    };



    render() {
        return (
            <div className='Todo'>
                <h1>Please, add new task and hit "Enter"</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>
                <List
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>

        );
    }
}

export default Todo;