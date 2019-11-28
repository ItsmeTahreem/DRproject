const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://tahreem:tahreem@cluster0-nbjfh.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const showSchema = new Schema({
  name:String,
  desc:String

});

const ShowModel = mongoose.model('show',showSchema);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });


app.get('/api/shows', (req,res,next) => {

  console.log("get request")
  ShowModel.find((err,data)=>{
    res.json({shows:data});
  })
})


app.delete('/api/shows/:id', (req,res) =>{
  console.log(req.params.id);

  ShowModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
     
    res.json(data);
  })
})




app.post('/api/shows', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.name);
console.log(req.body.desc);


ShowModel.create({
  name: req.body.name,
  desc: req.body.desc,


});
res.json('data uploaded')


})


app.get('/api/shows/:id',(req,res)=>{
  console.log(req.params.id);

  ShowModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})


app.put('/api/shows/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  ShowModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});