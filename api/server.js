import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  songRoute from "./routes/song.route.js";
import cors from "cors";

const app = express();
dotenv.config();
// mongoose.set("strictQuery", true);
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://0.0.0.0:27017/SONG', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected to mongoDB!");
//   } catch (error) {
//     console.log(error);
//   }
// };

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use("/api/songs", songRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  // connect();
  console.log("Backend server is running!");
});
