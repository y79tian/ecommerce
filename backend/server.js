import express from "express"; // common js by default, not ES modules (as we used in the frontend)
import dotenv from "dotenv";
import colors from "colors"; // must appear here
import connectDB from "./config/db.js"; // must add .js if we would like to import a file
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // req.body in the form of json

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// if original url does not match any of the url above, it goes to the below error handler
app.use(notFound);

// handle the error that is thrown in the app.use above
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
