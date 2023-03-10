const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

require("dotenv").config()

const { userRoute } = require("./routes/userRoute");

const port = 4000;

app.use(express.json());

app.use("/api", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
