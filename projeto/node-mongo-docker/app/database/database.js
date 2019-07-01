const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/node-api', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log("Erro ao conectar ao banco: " + err)
  } else {
    console.log("Conexão estabelecida com sucesso !")
  }
})

autoIncrement.initialize(mongoose.connection);
mongoose.Promise = global.Promise;

module.exports = mongoose;