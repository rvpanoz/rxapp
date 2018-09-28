const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");

function _generateId() {
  const _id = Math.floor(Math.random() * 10);

  if (TODOS.map(todo => todo.id).some(id => id === _id)) {
    _generateId();
  } else {
    return _id;
  }
}

//mock data
var TODOS = [
  {
    id: 345,
    title: "Silly todo 1",
    completed: 0,
    created_at: new Date()
  },
  {
    id: 315,
    title: "Silly todo 2",
    completed: 1,
    created_at: new Date()
  },
  {
    id: 366,
    title: "Silly todo 3",
    completed: 0,
    created_at: new Date()
  },
  {
    id: 112,
    title: "Silly todo 4",
    completed: 0,
    created_at: new Date()
  },
  {
    id: 34,
    title: "Silly todo 5",
    completed: 1,
    created_at: new Date()
  },
  {
    id: 599,
    title: "Silly todo 6",
    completed: 0,
    created_at: new Date()
  },
  {
    id: 346,
    title: "Silly todo 7",
    completed: 0,
    created_at: new Date()
  },
  {
    id: 178,
    title: "Silly todo 8",
    completed: 1,
    created_at: new Date()
  },
  {
    id: 199,
    title: "Silly todo 9",
    completed: 0,
    created_at: new Date()
  }
];

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

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

app.get("/todos", function(req, res) {
  console.log(TODOS);
  setTimeout(() => {
    res.send({
      success: true,
      data: [
        {
          id: 1,
          completed: 1,
          created_at: new Date(),
          title: "ttt1"
        }
      ]
    });
  }, 1500);
});

app.post("/todo", function(req, res) {
  const { body } = req;
  const newTodo = Object.assign({}, body, {
    id: TODOS.sort((a, b) => a.id - b.id)[TODOS.length - 1].id + 1
  });

  console.log(newTodo);
  TODOS = [...TODOS, newTodo];

  res.send({
    success: true,
    data: TODOS
  });
});

app.post("/update/{id}", function(req, res) {
  const { body } = req;

  res.send({
    success: true,
    data: body
  });
});

app.post("/add", function(req, res) {
  const { body } = req;

  res.send({
    success: true,
    data: body
  });
});

app.listen(port, function() {
  console.log(`Server is running at port: ${port}`);
});
