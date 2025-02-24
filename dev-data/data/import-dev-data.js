const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Leitura do arquivo JSON
const data = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

// Importa os dados para o banco de dados
const importData = async () => {
  try {
    await Tour.create(data);
    console.log('Dados gravados com sucesso');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
// Deletar todos os dados do banco.
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Dados deletados com sucesso.');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
