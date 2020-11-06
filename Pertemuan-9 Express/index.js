var express = require('express')
const { allowedNodeEnvironmentFlags } = require('process')

var app = express()

app.get('/', function(req, res){res.send('Hello World!')})

app.post('/', function(req, res){res.send('Ini POST Request!')})

app.put('/user', function(req, res){res.send('PUT Request dijalankan!')})

app.delete('/user', function(req, res){res.send('DELETE Request pada suatu user!')})

app.use(express.static('public'));

//specified port
app.listen(3000)

/*
Install Express:
$ npm install express
$ cd "Pertemuan-9 Express"
$ npm init
-> Cukup Enter sampai selesai
*/

/*
Install Nodemon:
$ npm install -g nodemon
$ Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
$ nodemon
*/