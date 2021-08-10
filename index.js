import express from "express";
import Routes from "./src/Routes/crmRoute";

const app = express();
const PORT = 4000;

Routes(app);

app.get("/", (req, res) => {
  res.json("Hello Welcome");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
