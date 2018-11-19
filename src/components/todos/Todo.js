import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PaperHeader from "../layout/paper/PaperHeader";
import PaperBody from "../layout/paper/PaperBody";
import PaperFooter from "../layout/paper/PaperFooter";
import { Notifier } from "../layout/system";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { todoStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { merge } from "ramda";
import Loader from "@material-ui/core/CircularProgress";

class Todo extends React.Component {
  //TODO: use useState hook
  state = {
    needSave: false,
    isDirty: false,
    notifierOpen: false,
    todo: {
      title: "",
      completed: "0",
      created_at: new Date(),
      comment: ""
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id } = nextProps.match && nextProps.match.params;
    const { isDirty } = prevState;

    return {
      ...prevState,
      todo: id && !isDirty ? nextProps.todo : prevState.todo
    };
  }

  constructor(props) {
    super(props);
  }

  addTodo = e => {
    const { todo } = this.state;

    this.setState(
      {
        needSave: true
      },
      () => this.props.add(todo)
    );
  };

  updateTodo = (e, id) => {
    const { todo } = this.state;

    this.setState(
      {
        needSave: true
      },
      () => this.props.update(todo)
    );
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.loading === false &&
      this.props.loading !== prevProps.loading
    ) {
      this.setState({
        notifierOpen: true,
        notifierMessage: "todo loaded!"
      });
    }

    if (this.state.needSave && this.state.todo !== this.props.todo) {
      this.props.history.push(`/`);
    }
  }

  componentDidMount() {
    console.info("Todo mounted");
    const { id } = this.props.match && this.props.match.params;

    if (id) {
      this.props.load(id);
    }
  }

  handleChange = name => event => {
    this.setState({
      isDirty: true,
      todo: merge(this.state.todo, {
        [name]:
          name === "completed"
            ? event.target.checked
              ? "1"
              : "0"
            : event.target.value
      })
    });
  };

  render() {
    console.log("Todo rendered");
    const { classes, loading } = this.props;
    const { todo } = this.state;
    const { id } = this.props.match && this.props.match.params;

    return (
      <main className={classes.content}>
        <Grid container>
          <Grid item xs={6} sm={6} lg={4} xl={4}>
            <Paper elevation={2} square className={classes.container}>
              <PaperHeader>
                <div className={classes.flexContainer}>
                  <Typography
                    className={classes.heading}
                    align="left"
                    gutterBottom={true}
                    variant="headline"
                  >
                    Todo
                  </Typography>
                  {loading && <Loader size={25} />}
                </div>
                <Divider />
              </PaperHeader>
              <PaperBody>
                <form noValidate autoComplete="off">
                  <Grid container>
                    <Grid item xs={6}>
                      <TextField
                        disabled={loading}
                        id="todo-title"
                        label="Title"
                        className={classes.textField}
                        value={todo ? todo.title : ""}
                        helperText="add title"
                        onChange={this.handleChange("title")}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        className={classes.completedField}
                        control={
                          <Checkbox
                            disabled={loading}
                            checked={todo && todo.completed === "1"}
                            onChange={this.handleChange("completed")}
                            color="primary"
                          />
                        }
                        label="Completed"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="todo-comment"
                        label="Comment"
                        disabled={loading}
                        value={todo ? todo.comment : ""}
                        style={{ margin: 8 }}
                        placeholder="add a comment"
                        helperText="your comment"
                        onChange={this.handleChange("comment")}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Grid>
                  </Grid>
                </form>
              </PaperBody>
              <PaperFooter>
                <Button
                  disabled={loading}
                  color="primary"
                  variant="contained"
                  onClick={e => (id ? this.updateTodo(e, id) : this.addTodo(e))}
                >
                  Save
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  disabled={loading}
                  onClick={e => this.props.history.push(`/`)}
                >
                  Back
                </Button>
              </PaperFooter>
              <Notifier
                open={this.state.notifierOpen}
                message={this.state.notifierMessage}
              />
            </Paper>
          </Grid>
        </Grid>
      </main>
    );
  }
}

const _Todo = props => {
  const { classes, add, update, todo, open, message } = props;
  const { id } = props.match && props.match.params;

  return (
    <main className={classes.content}>
      <Grid item xs={6} sm={6} lg={4} xl={4}>
        <Paper elevation={2} square className={classes.container}>
          <PaperHeader>
            <div className={classes.flexContainer}>
              <Typography
                className={classes.heading}
                align="left"
                gutterBottom={true}
                variant="headline"
              >
                Todo
              </Typography>
            </div>
            <Divider />
          </PaperHeader>
          <PaperBody>
            <form noValidate autoComplete="off">
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="todo-title"
                    label="Title"
                    className={classes.textField}
                    helperText="add title"
                    value={todo ? todo.title : ""}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={todo && todo.completed === "1"}
                    className={classes.completedField}
                    control={<Checkbox color="primary" />}
                    label="Completed"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="todo-comment"
                    label="Comment"
                    style={{ margin: 8 }}
                    value={todo ? todo.comment : ""}
                    placeholder="add a comment"
                    helperText="your comment"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </PaperBody>
          <PaperFooter>
            <Button
              color="primary"
              variant="contained"
              onClick={e => (id ? update(e, id) : add(e))}
            >
              Save
            </Button>
            <Button color="secondary" variant="contained">
              Back
            </Button>
          </PaperFooter>
          <Notifier open={open} message={message} />
        </Paper>
      </Grid>
    </main>
  );
};

Todo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(todoStyles)(Todo);
