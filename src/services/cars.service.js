// ________________________________ DATABASE ________________________
const cars = [
  {
    id: 1,
    modelo: 'MERCEDES-BENZ GLE 63 AMG',
    ano: '2018/2019',
    km: '22.536',
    combustivel: 'Gasolina',
    cambio: 'Automatico',
    localizacao: 'Goiânia, GO',
    descricao:
      'Blindagem Carbon AGP Outros Opcionais: Farol de neblina, Direção Elétrica, Comando de áudio no volante, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.',
    foto: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220202/mercedesbenz-gle-63-amg-5.5-v8-turbo-gasolina-coupe-4matic-7gtronic-wmimagem11374364919.jpg?s=fill&w=1920&h=1440&q=75',
    preco: '810.000,00',
  },
  {
    id: 2,
    modelo: 'MCLAREN 720S',
    ano: '2020/2020',
    km: '3.243',
    combustivel: 'Gasolina',
    cambio: 'Manual',
    localizacao: 'Sorocaba, SP',
    descricao: '4.0 V8 TURBO GASOLINA SPIDER SSG',
    foto: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202203/20220329/mclaren-720s-4.0-v8-turbo-gasolina-spider-ssg-wmimagem21542846570.jpg?s=fill&w=1920&h=1440&q=75',
    preco: '3.800.000,00',
  },
  {
    id: 3,
    modelo: 'JAGUAR XE',
    ano: '2016/2017',
    km: '72.224',
    combustivel: 'Gasolina',
    cambio: 'Automatico',
    localizacao: 'Goiânia, GO',
    descricao:
      'Configuração all black - Rodas Aro 19 em black piano Outros Opcionais: Direção Elétrica, Comando de áudio no volante, Banco bi-partido, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.',
    foto: 'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202204/20220408/jaguar-xe-2.0-16v-si4-turbo-gasolina-rsport-4p-automatico-wmimagem15101664914.jpg?s=fill&w=1920&h=1440&q=75',
    preco: '179.900,00',
  },
];

// ________________________________ FIND CAR ________________________
const findCar = () => {
  return cars;
};

// ________________________________ FIND CARS BY ID ________________________
const findCarsByIdService = (idParam) => {
  const takeCar = cars.find((carro) => carro.id == idParam);
  return takeCar;
};

// ________________________________ CREATE CAR ________________________
const createCarService = (newCar) => {
  const newId = cars.length + 1;
  newCar.id = newId;
  cars.push(newCar);
  return newCar;
};

// ________________________________ UPDATE CAR ________________________
const updateCarService = (id, carEdited) => {
  carEdited['id'] = id;
  const CarIndex = cars.findIndex((carros) => carros.id == id);
  cars[CarIndex] = carEdited;
  return carEdited;
};

// ________________________________ DELETE CAR ________________________
const deleteCarService = (id) => {
  const carIndex = cars.findIndex((carros) => carros.id == id);
  return cars.splice(carIndex, 1);
};

module.exports = {
  findCar,
  findCarsByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
};
