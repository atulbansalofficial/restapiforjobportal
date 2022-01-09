const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.get("/students", (req, res) => {
  res.send("hello From the other sides.");
});

app.listen(port, () => {
  console.log(`Connection is open at http://localhost:${port} `);
});
