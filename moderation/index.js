const axios = require("axios");
const express = require("express");
const app = express();

//body parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios
      .post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content,
        },
      })
      .catch((err) => {
        console.log(err.message, "CommentModerated");
      });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Moderation server listening on 4003");
});
