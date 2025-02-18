const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// o val é usado apenas quando o middle for usado diretamente na rota pelo route.param.
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messager: 'Invalid ID.',
    });
  }
  next();
};

exports.chekBodyRequest = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      messager: "Bad request, request.body doen't match with expected patern.",
    });
  }
  next();
};

exports.getAllTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    createdAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};
exports.getTourById = (req, res) => {
  const id = req.params.id * 1; // converte o parâmetro ID em um number.
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'sucess',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1; // gerando um Id aleatório.
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (arr) => {
      res.status(201).json({
        status: 'sucess',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'sucess',
    data: {
      tour: '<Retornar o objeto atualizado/deletado aqui>',
    },
  });
};

exports.deleteTour = (req, res) => {
  return res.status(204).json({
    status: 'sucess',
    data: null,
  });
};
