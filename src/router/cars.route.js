const route = require('express').Router();
const controllerCars = require('../controllers/cars.controller');

route.get('/allcars', controllerCars.findCarsController);

route.get('/find-car/:id', controllerCars.findCarsByIdController);

route.post('/create', controllerCars.createCarController);

route.put('/update/:id', controllerCars.updateCarController);

route.delete('/delete/:id', controllerCars.deleteCarController);

module.exports = route;
