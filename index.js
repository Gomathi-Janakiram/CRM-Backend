import express from "express";
import Routes from "./src/Routes/crmRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
const PORT = 4000;

// mongodb connection

mongoose.connect(
  "mongodb+srv://crmuser:AoGNtmbhseBDSLHH@cluster0.lh17j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to DB");
    } else {
      console.log("Success connecting to DB");
    }
  }
);

// cors


app.use(cors())

// body-parser setup

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Routes(app);

app.get("/", (req, res) => {
  res.json("Hello Welcome");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
