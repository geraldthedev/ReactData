//var mongo = require('mongodb');
//mongoose.connect('mongodb://gbryant:Blessedautumn1106@cluster0-shard-00-00-xutke.gcp.mongodb.net:27017,cluster0-shard-00-01-xutke.gcp.mongodb.net:27017,cluster0-shard-00-02-xutke.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://gbryant:Blessedautumn1106@cluster0-shard-00-00-xutke.gcp.mongodb.net:27017,cluster0-shard-00-01-xutke.gcp.mongodb.net:27017,cluster0-shard-00-02-xutke.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true,";
//var User = mongoose.model("User", nameSchema);

const wave = MongoClient.connect(url, function(error,db){
    if(error) throw error;
    var dbc = db.db('userdb');
    dbc.createCollection("Users", function(error, res){
        if (error) throw error;
        console.log("Collection created");
    db.close();
    });

});

module.exports = wave;








/*var db = mongoose.connection;
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

module.exports = {db};
*/