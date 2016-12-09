var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 42995;

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var mongoURL = 'mongodb://cs290_stettlec:U5WD3mGuB75pzfW@classmongo.engr.oregonstate.edu/cs290_stettlec';
var mongoDB;



app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/', function (req, res) {

  res.send(indexhtml);

});


app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.post('/createAccount', function(req, res){
		// var myCursor = mongoDB.collection('users').find({"username" : "Nate", "password" : "natepass"});
		// var documentArray = myCursor.toArray();
		// console.log("Is:  " + documentArray[0])
		//console.log(mongoDB.collection('users').find({"Username" : "Nate", "password" : "natepass"}));
		//console.log(mongoDB.collection('users').find({"username" : "Nate"}));
		
		// console.log("Should be: " + req.body.user);
		// var myCursor = mongoDB.collection('users').find({"username" : req.body.user, "password" : req.body.pass});
		// var documentArray = myCursor.toArray();
		// var myDocument = documentArray[1];
		// console.log("Is:  " + documentArray[0])
		
		//console.log(req.body.user + ' ' + req.body.pass);
		//console.log(mongoDB.collection('users').find({"username" : req.body.user}));
	if ( typeof req.body.user === 'undefined' || typeof req.body.pass === 'undefined') {
		res.status(400);
		console.log('incorrect! Missing user or pass.')
		res.send('Missing user or pass');
		res.end();
	}
	mongoDB.collection('users').find({"username": req.body.user}).toArray(function(err, docs) {
	assert.equal(err, null);
	
	if (docs.length === 0) {
		mongoDB.collection('users').insert(
		{
			"username": req.body.user, 
			"pass": req.body.pass,
			"petpets": 0,
			"petpetpoints": 0,
			"pets": [
				{
					"name": "cat",
					"pets": 0
				}
			]
			
		}
		);
		console.log("Tried to inset into database users")
		console.log('making new account');
		res.status(200);
		res.send('Making new account');
		res.end();
	}
	
	else {
		console.log(docs[0].username);
		console.log(req.body.user);
		console.log("User already exists");
		res.status(400);
		res.send('User already exists');
		res.end();
	}
	});
	


	/*
	mongoDB.collection('users').insert(
	{"Username" : "Nate", "Pass" : "natepass"}
	);
	console.log("Tried to inset into database users");*/
});


/*
app.post('/check', function(req, res){
	if(mongoDB.collection('users').find(
	{"Username" : "Nate"}
	);) {
	console.log("Tried to for existence of Nate");
	}
});*/


var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('serious');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('serious');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

MongoClient.connect(mongoURL, function (err, db) {
  if (err) {
    console.log("== Unable to make connection to MongoDB Database.")
    throw err;
  }
  mongoDB = db;
  app.listen(port, function () {
    console.log("== Listening on port", port);
  });
});

/*
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});
*/
