const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// const apiRouter = require("./routes/route.js");
const bodyParser = require("body-parser");


//parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/build', express.static(path.join(__dirname, '../build')));

// app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/api/test', (req, res) => {
  res.send('received')
})

//catch all
app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});
