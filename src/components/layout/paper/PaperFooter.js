import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import paperFooterStyle from "./paperFooterStyle";

function paperFooter({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    stats,
    chart,
    ...rest
  } = props;
  const paperFooterClasses = classNames({
    [classes.paperFooter]: true,
    [className]: className !== undefined
  });
  return (
    <div className={paperFooterClasses} {...rest}>
      {children}
    </div>
  );
}

paperFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool
};

export default withStyles(paperFooterStyle)(paperFooter);
