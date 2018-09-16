const express = require("express");
const app = express();

const TODOS = [
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
  }
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set({
    "Content-Type": "application/json"
  });
  next();
});

app.get("/todos", (req, res) => {
  setTimeout(() => {
    res.send({
      success: true,
      data: TODOS
    });
  }, 2500);
});

app.listen(3000, () => console.log("Server is running!"));
