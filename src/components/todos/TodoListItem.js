import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ todo }) => (
  <div className="tile">
    <div className="tile-icon">
      <div className="example-tile-icon">
        <i className="icon icon-file centered" />
      </div>
    </div>
    <div className="tile-content">
      <p className="tile-title">{todo.title}</p>
      <p className="tile-subtitle text-gray">{todo.created_at}</p>
    </div>
    <div className="tile-action">
      <button className="btn btn-success">Done</button>
    </div>
  </div>
);

export default TodoListItem;
