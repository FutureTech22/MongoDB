const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8081;
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://brettsdb:12345@ds111441.mlab.com:11441/brettultimatedb');


app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 


// Get all of people
app.get('/users',function(req,res){
	User.find().exec((err,response) => {
		if(err) return res.json(err);
		res.json(response);
	})
})

// Get a single person
app.get('/users/:id',function(req,res){
	let id = req.params.id;
	const single = data.filter(singleData => {
		if(singleData.id == id ) {
			return true;
		}
	})
	res.json(single);
})
// Post a new person
app.post('/users',function(req,res){
	let newuser = new User();
		newuser.name = req.body.name;
		newuser.age = req.body.age;
		newuser.JS = req.body.JS;
		newuser.save(err=>{
    if(err) return res.json({err});
    User.find().exec((err,response)=>{
      if(err) res.json({err});
      res.json(response);
    });
  });
})


// Delete a person
app.delete('/users/:id',function(req,res){
	let id = req.params.id;

	User.remove({_id:id},(err) => {
		if(err) res.json(err);
		console.log("INSIDE")

		User.find().exec((err,response)=>{
	      if(err) res.json({err});
	      res.json(response);
	    });

	});
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});