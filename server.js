const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const TODOS = require("./mock").getTodos();

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

app.get("/todos", (req, res) => {
  setTimeout(() => {
    res.send({
      success: true,
      data: TODOS
    });
  }, 2500);
});

app.post("/update/{id}", (req, res) => {
  const { body } = req;
});

app.post("/add", (req, res) => {
  const { body } = req;

  res.send({
    success: true,
    data: body
  });
});

app.listen(port, () => console.log(`Server is running at port: ${port}`));
