import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json("Hello Welcome");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});