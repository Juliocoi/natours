const Tour = require('../models/tourModel');

exports.getAllTour = async (req, res) => {
  try {
    // buid query
    // 1a) Filtering
    const queryObj = { ...req.query };
    const exclueFields = ['page', 'sort', 'limit', 'fields'];
    exclueFields.forEach(el => delete queryObj[el]); // exclui propriedades de paginação q não precisam ir para a query. Não necessário a partir do mongoose 6.
    // 1b) Advenced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    // 2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' '); //cria um segundo parametro para o filtro sort('price ratingAverage'), url exemplo: /api/v1/tours?sort=price,ratingsAverage
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    //3) field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v'); // o - remove o campo do documento repostar. Semelhante ao agregate nas versões mais recentes do mongo
    }

    // execute query
    const tours = await query;

    // const { page, sort, limit, fields, ...queryObj } = req.query; query usando destructing. Usar para mongose 6+ ver: https://mongoosejs.com/docs/guide.html#strictQuery

    res.status(200).json({
      status: 'sucess',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.send(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'sucess',
      tour
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'sucess',
      data: {
        tours: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'sucess',
      tour
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'sucess',
      message: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
