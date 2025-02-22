const Tour = require('../models/tourModel');

exports.chekBodyRequest = (req, res, next) => {
  // if (!req.body.name || !req.body.price) {
  //   return res.status(400).json({
  //     status: 'fail',
  //     messager: "Bad request, request.body doen't match with expected patern."
  //   });
  // }
  next();
};

exports.getAllTour = (req, res) => {
  // res.status(200).json({
  //   status: 'sucess',
  //   createdAt: req.requestTime,
  //   results: tours.length,
  //   data: {
  //     tours: tours
  //   }
  // });
};
exports.getTourById = (req, res) => {
  // const id = req.params.id * 1; // converte o parâmetro ID em um number.
  // const tour = tours.find(el => el.id === id);
  // res.status(200).json({
  //   status: 'sucess',
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  // res.status(201).json({
  //   status: 'sucess',
  //   data: {
  //     tours: newTour
  //   })
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    data: {
      tour: '<Retornar o objeto atualizado/deletado aqui>'
    }
  });
};

exports.deleteTour = (req, res) => {
  return res.status(204).json({
    status: 'sucess',
    data: null
  });
};
