import commonStyles from "commons/styles";

export const listStyles = theme => ({
  ...commonStyles
});

export const listItemStyles = theme => ({
  done: {
    textDecoration: "line-through"
  }
});

export const todoStyles = theme => ({
  ...commonStyles,
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  completedField: {
    position: "relative",
    float: "right",
    top: 30,
    right: 0
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});
