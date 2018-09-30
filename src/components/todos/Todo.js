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
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { todoStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { merge } from "ramda";
import Loader from "@material-ui/core/CircularProgress";

class Todo extends React.Component {
  state = {
    isDirty: false,
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

  addTodo = e => {
    const { todo } = this.state;
    this.props.add(todo);
  };

  updateTodo = (e, id) => {
    const { todo } = this.state;
    this.props.update(todo);
  };

  componentDidMount() {
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
                >
                  Cancel
                </Button>
              </PaperFooter>
            </Paper>
          </Grid>
        </Grid>
      </main>
    );
  }
}

Todo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(todoStyles)(Todo);
