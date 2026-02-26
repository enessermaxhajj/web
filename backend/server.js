const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.json({ message: "Todo added" });
});

app.listen(5000, () => console.log("Server running on port 5000"));