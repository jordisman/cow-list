const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

mongoose.connect('mongodb://localhost:27017/cowlistDB', { useNewUrlParser: true });

const cowsSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Cow = mongoose.model('Cow', cowsSchema);

const Cow1 = new Cow({
  name: 'Buttercup',
  description: 'Sample description.'
});

const Cow2 = new Cow({
  name: 'Angus',
  description: 'Angus description 2.'
});

const defaultList = [Cow1, Cow2];

// Cow2.save();

// Cow.deleteOne({ _id: "5c93f20ecf67413f0647cb46"}, function(err) {
//   if (err) {console.log(err);}
//    else {console.log('delete ok')}
// });

app.get('/api/cows', (req, res) => {
  // read from db
  Cow.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
      res.json(foundItems)
    }
  })
})


app.post('/api/cows', (req, res) => {

  const newCow = new Cow(req.body);

  newCow.save()
    .then(item => {
      console.log("item saved to database");
      res.send(item);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

// Cow.deleteOne({name: 'Buttercup'}, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('delete ok');
//   }
// });

app.listen(port, () => {
  console.log('listening to port ', port);
});
