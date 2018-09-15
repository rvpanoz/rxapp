const express = require("express");
const app = express();

const TODOS = [
  {
    id: 345,
    title: "Silly todo",
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

app.get("/todos", (req, res) =>
  res.send({
    success: true,
    data: TODOS
  })
);

app.listen(3000, () => console.log("Server is running!"));
