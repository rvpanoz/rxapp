import commonStyles from "commons/styles";

const styles = theme => ({
  ...commonStyles,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: "auto"
  }
});

export default styles;
