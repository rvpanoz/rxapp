import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import paperHeaderStyle from "./paperHeaderStyle";

function paperHeader({ ...props }) {
  const {
    classes,
    className,
    children,
    color,
    plain,
    stats,
    icon,
    ...rest
  } = props;
  const paperHeaderClasses = classNames({
    [classes.paperHeader]: true,
    [classes[color + "paperHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={paperHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

paperHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool
};

export default withStyles(paperHeaderStyle)(paperHeader);
