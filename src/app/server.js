const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://tahreem:tahreem@cluster0-nbjfh.mongodb.net/test?retryWrites=true&w=majority' /* my mongodb that saves all the information  */
mongoose.connect(mongoDB, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const showSchema = new Schema({
  name: String, /* name, desc, type and picdate strings */
  desc: String,
  type: String,
  pickdate: String,

});



const ShowModel = mongoose.model('show', showSchema);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/shows', (req, res, next) => { /* get the shows  */

  console.log("get request")
  ShowModel.find((err, data) => {
    res.json({ shows: data });
  })
})


app.delete('/api/shows/:id', (req, res) => {
  console.log(req.params.id);

  ShowModel.deleteOne({ _id: req.params.id }, (error, data) => { /* Deletes the show */
    if (error)
      res.json(error);

    res.json(data);
  })
})


app.post('/api/shows', (req, res) => { /* Posts data into the consol and into my localhost */
  console.log('post Sucessfull');
  console.log(req.body)
  console.log(req.body.name);
  console.log(req.body.desc);
  console.log(req.body.type);
  console.log(req.body.pickdate);

  ShowModel.create({  /*creates the name desc type and pickdate */
    name: req.body.name,
    desc: req.body.desc,
    type: req.body.type,
    pickdate: req.body.pickdate,

  });
  res.json('data uploaded') /* data is uploaded into the database */


})


app.get('/api/shows/:id', (req, res) => {
  console.log(req.params.id);

  ShowModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})

/* puts in the data requested */
app.put('/api/shows/:id', (req, res) => {
  console.log(req.body);
  console.log("Edit " + req.params.id);

  ShowModel.findByIdAndUpdate(req.params.id, /* finds by id and updates  */
    req.body, { new: true }, (error, data) => {
      res.send(data);
    })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});

