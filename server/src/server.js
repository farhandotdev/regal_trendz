const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/connectDb");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception...`);
  process.exit(1);
});

// config
dotenv.config({ path: "src/config/config.env" });

// Connecting  to the database
connectDatabse();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    `Shutting down the server due to unhandled  promise rejection...`
  );
  server.close(() => {
    process.exit(1);
  });
});
