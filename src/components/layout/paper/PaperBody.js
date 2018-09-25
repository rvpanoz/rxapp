import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import paperBodyStyle from './paperBodyStyle';

function paperBody({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const paperBodyClasses = classNames({
    [classes.paperBody]: true,
    [classes.paperBodyPlain]: plain,
    [classes.paperBodyProfile]: profile,
    [className]: className !== undefined,
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
  profile: PropTypes.bool,
};

export default withStyles(paperBodyStyle)(paperBody);
