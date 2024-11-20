import express from "express";
import cors from "cors";

import users from "./routes/user.js";


const PORT = 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

app.listen (PORT, () => {

  console.log(`SERVER is listening on port ${PORT}`);

})