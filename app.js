const express = require("express");
const path = require("path");
const app = express(); // create express app


app.use(express.static(path.join(__dirname, "build")));

app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});