const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api.js");
const PORT = 3000;

const apiRouter = require('./routes/api');

// const apiRouter = require("./routes/route.js");
const bodyParser = require("body-parser");

//parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/build', express.static(path.join(__dirname, '../build')));


// handle anything for api
app.use("/api", apiRouter);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//catch all
app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});