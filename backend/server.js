import path from "path";
import express from "express"; // common js by default, not ES modules (as we used in the frontend)
import dotenv from "dotenv";
import colors from "colors"; // must be here
import morgan from "morgan";
import connectDB from "./config/db.js"; // must add .js if we would like to import a file
import productRouter from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // will log the route, status code, time
}
app.use(express.json()); // req.body in the form of json

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// __dirname -> curr direct name, only used in commonjs, use path.resolve()
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads"))); // make the uploads folder static

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
