import React from "react";

const withTogglableItems = Component =>
  class TogglableItems extends Component {
    state = {
      checked: []
    };

    handleToggle = todoId => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(todoId);

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
          handleToggle={this.handleToggle}
        />
      );
    }
  };

export default withTogglableItems;
