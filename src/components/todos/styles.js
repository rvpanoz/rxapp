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
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: "auto"
  },
  center: {
    maxWidth: "50%",
    position: "relative"
  },
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

export const filtersStyles = theme => ({
  field: {}
});
