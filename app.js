const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting", (request, response) => {
  response.send({ greeting: "Hi there!"});
});

console.log(`server running on ${port}`)
app.listen(port); 



