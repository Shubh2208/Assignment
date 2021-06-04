const fs = require('fs')
const readline = require('readline');

const argv = require('yargs').argv;
const express = require ('express')

const app = express();
const port = 8080;

var port = process.env.PORT || 8080



fs.readFile('fileName.txt', function(err, data){
	if(err)
	throw err;
	console.log(data.toString())
});

app.listen( port, (err) => {
	console.log('Server listening on port' +port)
});


app.use (function(req,res, next){
	console.log('Request Recieved:' );
      next();
});





app.get('/', function(req,res){
	res.sendFile(__dirname +'/user.html')
});