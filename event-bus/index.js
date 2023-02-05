const express = require("express");
const axios = require("axios");
const app = express();

//body parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/events", async (req, res) => {
  const event = req.body;
  await axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message, "post");
  });
  await axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message, "comments");
  });
  await axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message, "query");
  });

  res.send({ status: "Ok" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
