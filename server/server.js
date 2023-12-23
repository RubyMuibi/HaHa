const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

require("dotenv").config();

app.get("/", async (req, res) => {
  try {
    const fetchURL = process.env.SECRET_URL;
    const fetchOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.SECRET_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.SECRET_RAPIDAPI_HOST,
      },
    };
    const response = await fetch(fetchURL, fetchOptions);
    const responseData = await response.json();
    res.send(responseData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server started at port: http://localhost:${port}`);
});
