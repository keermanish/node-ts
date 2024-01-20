import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/todo", (req, res) => {
  return res.send(req.body);
});

app.get("/ping", (_, res) => {
  return res.send({
    ack: "pong",
    t: Date.now(),
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on ${process.env.SERVER_PORT} port`);
});
