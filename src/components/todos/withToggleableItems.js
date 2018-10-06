import React from "react";

const _updateChecked = todos =>
  todos &&
  todos
    .filter(todo => {
      if (todo.completed === "1") {
        return todo.id;
      }
    })
    .map(todo => todo.id);

const withTogglableItems = Component =>
  class TogglableItems extends Component {
    state = {
      checked: []
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log(nextProps.todos, prevState.checked);
      return {
        ...prevState,
        checked:
          !prevState.checked.length && nextProps.todos && nextProps.todos.length
            ? _updateChecked(nextProps.todos)
            : prevState.checked
      };
    }

    handleToggle = todoId => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(todoId);
      console.log(currentIndex);
      this.setState({
        checked:
          currentIndex === -1
            ? [...checked, todoId]
            : checked.slice(currentIndex, 0)
      });
    };

    render() {
      const { checked } = this.state;

      return (
        <Component
          {...this.props}
          checked={checked}
          updateChecked={this.updateChecked}
          handleToggle={this.handleToggle}
        />
      );
    }
  };

export default withTogglableItems;
