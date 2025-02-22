const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Um passeio deve ter um nome'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    require: [true, 'Um passeio precisa de um preço']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
