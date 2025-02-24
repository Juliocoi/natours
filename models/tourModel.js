const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Um passeio deve ter um nome'],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'Informe a duração média do passeio.']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Informe o tamanho máximo do grupo']
  },
  difficulty: {
    type: String,
    required: [true, 'Informe a dificuldade do passeio.'],
    trim: true
  },
  ratingAvarege: {
    type: Number,
    default: 4.5
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'Um passeio precisa de um preço']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    required: [true, 'Informe uma descrição para o passeio'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    require: [true, 'Um passei precisa de uma imagem de capa.']
  },
  images: [String],
  createdAt: {
    type: Date,
    defaut: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
