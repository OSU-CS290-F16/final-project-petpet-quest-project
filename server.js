var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 44454;

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var url = 'mongodb://cs290_stettlec:U5WD3mGuB75pzfW@classmongo.engr.oregonstate.edu/cs290_stettlec';




app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {

  res.send(indexhtml);

});


app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(port, function () {
  console.log("== Listening on port", port);
});




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
