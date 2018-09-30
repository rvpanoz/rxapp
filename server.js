const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const merge = require("ramda").merge;

//MIDDLEWARES

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//HEADERS
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  });
  next();
});

//ROUTES
app.get("/api/todos", function(req, res) {
  const TODOS = fs.readFileSync("./db.json", {
    encoding: "utf8"
  });

  try {
    const { todos } = JSON.parse(TODOS);

    if (!todos) {
      return res.send({
        success: true,
        data: []
      });
    }

    setTimeout(() => {
      res.send({
        success: true,
        data: todos
      });
    }, 1500);
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/api/todo/:id", function(req, res) {
  const { id } = req.params;

  try {
    const TODOS = fs.readFileSync("./db.json", {
      encoding: "utf8"
    });
    const { todos } = JSON.parse(TODOS);

    if (!todos || !Array.isArray(todos)) {
      return res.send({
        success: true,
        data: []
      });
    }

    setTimeout(() => {
      res.send({
        success: true,
        data: todos.filter(todo => todo.id === id)
      });
    }, 1500);
  } catch (error) {
    throw new Error(error);
  }
});

app.post("/api/todo/create", function(req, res) {
  const { body } = req;

  try {
    const TODOS = fs.readFileSync("./db.json", {
      encoding: "utf8"
    });
    const data = JSON.parse(TODOS);
    const { todos } = data;

    const newTodo = Object.assign({}, body, {
      id:
        todos && todos.length
          ? todos.sort((a, b) => a.id - b.id)[todos.length - 1].id + 1
          : 1
    });

    const newData = Object.assign({}, data, {
      todos: [...data.todos, newTodo]
    });

    fs.writeFileSync("./db.json", JSON.stringify(newData), {
      encoding: "utf8"
    });

    res.send({
      success: true
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.post("/api/todo/update", function(req, res) {
  const { body } = req;
  const { id } = body || {};

  try {
    const TODOS = fs.readFileSync("./db.json", {
      encoding: "utf8"
    });
    const data = JSON.parse(TODOS);
    const { todos } = data;

    const todo = todos && todos.find(todo => todo.id === id);

    if (!todo) {
      return res.send({
        success: true,
        data: null
      });
    }

    const newData = Object.assign({}, data, {
      todos: todos.map(todo => (todo.id === id ? merge(todo, body) : todo))
    });

    fs.writeFileSync("./db.json", JSON.stringify(newData), {
      encoding: "utf8"
    });

    res.send({
      success: true
    });
  } catch (error) {
    throw new Error(error);
  }
});

/////

app.listen(port, function() {
  console.log(`Server is running at port: ${port}`);
});
