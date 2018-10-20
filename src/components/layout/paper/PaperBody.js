import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import paperBodyStyle from "./paperBodyStyle";

function paperBody({ ...props }) {
  const { classes, className, children, plain, ...rest } = props;
  const paperBodyClasses = classNames({
    [classes.paperBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={paperBodyClasses} {...rest}>
      {children}
    </div>
  );
}

paperBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default withStyles(paperBodyStyle)(paperBody);
