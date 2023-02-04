const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

//body parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
