import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import paperFooterStyle from "./paperFooterStyle";

function paperFooter({ ...props }) {
  const { classes, className, children, plain, ...rest } = props;
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
