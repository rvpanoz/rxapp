import React from "react";
import PropTypes from "prop-types";

const TodoListItem = ({ todo: { title, created_at } }) => (
  <div className="tile">
    <div className="tile-icon">
      <div className="example-tile-icon">
        <i className="icon icon-file centered" />
      </div>
    </div>
    <div className="tile-content">
      <p className="tile-title">{title}</p>
      <p className="tile-subtitle text-gray">{created_at}</p>
    </div>
    <div className="tile-action">
      <button className="btn btn-success">Done</button>
    </div>
  </div>
);

export default TodoListItem;
