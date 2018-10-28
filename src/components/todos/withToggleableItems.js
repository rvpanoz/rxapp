import React from "react";

const filterMapStatus = (todos, status) =>
  todos && todos.filter(todo => todo.completed === status).map(todo => todo.id);

const withTogglableItems = Component =>
  class TogglableItems extends Component {
    state = {
      _isDirty: false,
      checked: []
    };

    //use for updating todos - checked from the server
    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        ...prevState,
        checked:
          prevState._isDirty === false &&
          nextProps.todos &&
          nextProps.todos.length
            ? filterMapStatus(nextProps.todos, "1")
            : prevState.checked
      };
    }

    handleToggle = id => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(id);

      this.setState({
        _isDirty: true,
        checked:
          currentIndex === -1
            ? [...checked, id]
            : Array.concat(
                checked.slice(0, currentIndex),
                checked.slice(currentIndex + 1)
              )
      });
    };

    handleSelectAll = e => {
      const { checked } = e.target;
      const { todos } = this.props;
      const checkedItems = todos && todos.map(todo => todo.id);

      this.setState({
        _isDirty: true,
        checked: checked ? checkedItems : []
      });
    };

    render() {
      const { checked } = this.state;

      return (
        <Component
          {...this.props}
          checked={checked}
          handleToggle={this.handleToggle}
          handleSelectAll={this.handleSelectAll}
        />
      );
    }
  };

export default withTogglableItems;
