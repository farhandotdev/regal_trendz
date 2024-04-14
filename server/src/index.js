// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// // const morgan = require("morgan");
// const { userrouter } = require("./routes/userAuth");

// const { adminAuthRouter } = require("./routes/adminAuth");
// const { productRouter } = require("./routes/products");
// const app = express();

// // Middleware: Enable CORS
// app.use(cors());

// // Serve static files from the "uploads" directory
// app.use("/uploads", express.static("src/uploads"));
// // Middleware: Logging HTTP requests
// // app.use(morgan("dev"));

// // Middleware: Parse JSON bodies
// app.use(express.json());

// // Using Authentication Router from adminAuth.js(admin)
// app.use("/admin", adminAuthRouter);
// // Using Product Router product.js
// app.use("/product", productRouter);
// // Using Authentication Router from userAuth.js(user)
// app.use("/user", userrouter);

// app.get("/", (req, res) => {
//   res.send("Regal Trendz");
// });

// mongoose
//   .connect(
//     "mongodb+srv://regal:regal@cluster0.rgmucgx.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     app.listen(5000, () => {
//       console.log("Server Started on port no. 5000");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
