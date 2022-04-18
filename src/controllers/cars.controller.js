const carsService = require('../services/cars.service');
// ________________________________ FIND CARS CONTROLLER ________________________
const findCarsController = (req, res) => {
  const allCars = carsService.findCar();

  if (allCars == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum carro cadastrado !' });
  }

  res.send(allCars);
};
// ________________________________ FIND CARS BY ID CONTROLLER ________________________
const findCarsByIdController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam || idParam == ' ') {
    return res.status(404).send({ message: 'Id Invalido!' });
  }

  const chosenCar = carsService.findCarsByIdService(idParam);

  if (!chosenCar) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }

  res.send(chosenCar);
};
// ________________________________ CREATE CAR CONTROLLER ________________________
const createCarController = (req, res) => {
  const car = req.body;

  if (
    !car ||
    !car.modelo ||
    !car.ano ||
    !car.km ||
    !car.combustivel ||
    !car.cambio ||
    !car.localizacao ||
    !car.descricao ||
    !car.foto ||
    !car.preco
  ) {
    res.status(400).send({
      mensagem:
        'Você não preencheu todos os dados para adicionar um novo carro ao catálogo !',
    });
  }

  const newCar = carsService.createCarService(car);
  res.status(201).send(newCar);
};
// ________________________________ UPDATE CAR CONTROLLER ________________________
const updateCarController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }
  const carEdit = req.body;

  if (
    !carEdit ||
    !carEdit.modelo ||
    !carEdit.ano ||
    !carEdit.km ||
    !carEdit.combustivel ||
    !carEdit.cambio ||
    !carEdit.localizacao ||
    !carEdit.descricao ||
    !carEdit.foto ||
    !carEdit.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedCar = carsService.updateCarService(idParam, carEdit);
  res.send(updatedCar);
};
// ________________________________ DELETE CAR CONTROLLER ________________________
const deleteCarController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(404).send({ message: 'Id inválido!' });
  }

  carsService.deleteCarService(idParam);

  res.send({ message: 'Carro deletado com sucesso!' });
};

module.exports = {
  findCarsController,
  findCarsByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
};
