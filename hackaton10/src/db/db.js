const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/produccionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión a la base de datos establecida');
})
.catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});