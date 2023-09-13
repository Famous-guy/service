import express from "express";
import {configureServer} from "./core/index.js";

const app = express();
configureServer(app);

// Railway automatically injects this at runtime, and you don't even
// have to explicitly add it in the dashboard.
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
