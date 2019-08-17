import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <input id="new-todo" onChange={this.props.handleChange} value={this.props.text} />
                <button>Add #{this.props.items.length + 1}</button>
            </form>
        );
    }
}

export default TodoForm;