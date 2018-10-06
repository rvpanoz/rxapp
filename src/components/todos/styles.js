import commonStyles from "commons/styles";

export const listStyles = theme => ({
  ...commonStyles,
  list: {
    minHeight: "600px"
  },
  spacer: {
    flex: "1 1 100%"
  },
  toolbar: {}
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
    padding: theme.spacing.unit * 2,
    height: "100%",
    paddingTop: 60
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
