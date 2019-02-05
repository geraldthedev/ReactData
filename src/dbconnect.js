var mongoose = require('mongoose');
mongoose.connect('mongodb://gbryant:Blessedautumn1106@cluster0-shard-00-00-xutke.gcp.mongodb.net:27017,cluster0-shard-00-01-xutke.gcp.mongodb.net:27017,cluster0-shard-00-02-xutke.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("database connected");
  var userDetail = new mongoose.Schema({
      name: String,
      email: String,
      phone: Number
  });
});

module.exports = {mongoose};