const baseUrl = 'http://localhost:3000/cars';
// ________________________________ FIND ALL CARS ________________________
async function findAllCars() {
  const response = await fetch(`${baseUrl}/allcars`);

  const cars = await response.json();

  cars.forEach((carros) => {
    document.getElementById('carsList').insertAdjacentHTML(
      'beforeend',
      `
     
        <div class="card_car" id="carListItem_${carros.id}" >
        
        <img src="${carros.foto}" class="img-config">
            
        <div class="title_and_id_box">
            <h3>${carros.modelo}</h3>
            <h4 class="car_id">#${carros.id}</h4>
        </div>

        <div class="description">
            ${carros.descricao}
        </div>

        <div class="year_and_km_box">
            <h3 class="year">${carros.ano}</h3>
            <h3 class="km">${carros.km} Km</h3>
        </div>

        <div class="line"></div>

        <div class="price_box">
            
            <div class="price">
                R$ ${carros.preco}
            </div>
        </div>

        <form class="card_buttons">
            <div type="button" onclick="openModal(${carros.id})" class="btn-edit">
                <img src="/assets/img/edit.svg" class="img-icon">
            </div>
            <div type="button" onclick="openModalDelete(${carros.id})" class="btn-edit">
                <img src="/assets/img/trash.svg" class="img-icon">
            </div>
        </form>

     `,
    );
  });
}

findAllCars();

// ________________________________ FIND CARS BY ID ________________________
const findCarsById = async (value) => {
  const id = value;

  const allcars = await fetch(`${baseUrl}/allcars`);

  const cars = await allcars.json();

  const carsLeng = Object.values(cars).length;
  console.log(carsLeng);

  const carSelectedDiv = document.getElementById('carsList');

  carSelectedDiv.innerHTML = ``;

  if (id > carsLeng) {
    $(document).ready(function () {
      $('.toast').toast('show');
    });

    findAllCars();
  }
  const response = await fetch(`${baseUrl}/find-car/${id}`);

  if (response.status == 404) {
    findAllCars();
  } else {
    const carro_selected = await response.json();
    const carSelectedDiv = document.getElementById('carsList');

    carSelectedDiv.innerHTML = `
            <div class="card_car" id="carListItem_${carro_selected.id}" >
                
                <img src="${carro_selected.foto}" class="img-config">
                    
                <div class="title_and_id_box">
                    <h3>${carro_selected.modelo}</h3>
                   
                </div>

                <div class="description">
                    ${carro_selected.descricao}
                </div>

                <div class="year_and_km_box">
                    <h6 class="year">${carro_selected.ano}</h6>
                    <h6 class="km">${carro_selected.km} Km</h6>
                </div>

                <div class="line"></div>

                <div class="price_box">
                    
                    <div class="price">
                        ${carro_selected.preco}
                    </div>
                </div>

                <form class="card_buttons">
                    <div type="button" onclick="openModal(${carro_selected.id})" class="btn-edit">
                        <img src="/assets/img/edit.svg" class="img-icon">
                    </div>
                    <div type="button" onclick="openModalDelete(${carro_selected.id})" class="btn-edit">
                        <img src="/assets/img/trash.svg" class="img-icon">
                    </div>
                </form>
            
            `;

    return;
  }
};

// ________________________________ OPEN MODAL ________________________
async function openModal(id = null) {
  console.log(id);
  if (id != null) {
    document.querySelector('#title_register').innerText = 'Update Car';
    document.querySelector('#btn_update').innerText = 'Confirm';

    const response = await fetch(`${baseUrl}/find-car/${id}`);
    console.log(response);
    const car = await response.json();

    document.querySelector('#id').value = car.id;
    document.querySelector('#model').value = car.modelo;
    document.querySelector('#yearmodel').value = car.ano;
    document.querySelector('#km').value = car.km;
    document.querySelector('#fuel').value = car.combustivel;
    document.querySelector('#gearbox').value = car.cambio;
    document.querySelector('#localization').value = car.localizacao;
    document.querySelector('#description').value = car.descricao;
    document.querySelector('#imageurl').value = car.foto;
    document.querySelector('#price').value = car.preco;
  } else {
    document.querySelector('#title_register').innerText = 'Add New Car';
  }

  document.querySelector('.modal_container').style.display = 'block';
}

// ________________________________ CLOSE MODAL ________________________
function closeModal() {
  document.querySelector('.modal_container').style.display = 'none';
  document.querySelector('.modal_container_2').style.display = 'none';

  let modelo = (document.querySelector('#model').value = '');
  let ano = (document.querySelector('#yearmodel').value = '');
  let km = (document.querySelector('#km').value = '');
  let combustivel = (document.querySelector('#fuel').value = '');
  let cambio = (document.querySelector('#gearbox').value = '');
  let localizacao = (document.querySelector('#localization').value = '');
  let descricao = (document.querySelector('#description').value = '');
  let foto = (document.querySelector('#imageurl').value = '');
  let preco = (document.querySelector('#price').value = '');
}

// ________________________________ CREATE CAR ________________________
async function createCar() {
  let id = document.querySelector('#id').value;
  let modelo = document.querySelector('#model').value;
  let ano = document.querySelector('#yearmodel').value;
  let km = document.querySelector('#km').value;
  let combustivel = document.querySelector('#fuel').value;
  let cambio = document.querySelector('#gearbox').value;
  let localizacao = document.querySelector('#localization').value;
  let descricao = document.querySelector('#description').value;
  let foto = document.querySelector('#imageurl').value;
  let preco = document.querySelector('#price').value;

  const carsInputs = {
    id,
    modelo,
    ano,
    km,
    combustivel,
    cambio,
    localizacao,
    descricao,
    foto,
    preco,
  };

  const modeEditActive = id > 0;

  const endPoint =
    baseUrl + (modeEditActive ? `/update/${id}` : `/create/${id}`);

  const response = await fetch(endPoint, {
    method: modeEditActive ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(carsInputs),
  });

  const carros = await response.json();

  const cardCar = `
     
        <div class="card_car" id="carListItem_${carro_selected.id}"  >
        
        <img src="${carros.imageurl}" class="img-config">
            
        <div class="title_and_id_box">
            <h3>${carros.modelo}</h3>
            <h4 class="car_id">#${carros.id}</h4>
        </div>

        <div class="description">
            ${carros.descricao}
        </div>

        <div class="year_and_km_box">
            <h4 class="year">${carros.ano}</h4>
            <h4 class="km">${carros.km} Km</h4>
        </div>

        <div class="line"></div>

        <div class="price_box">
            
            <div class="price">
                ${carros.preco}
            </div>
        </div>

        <div class="card_buttons">
            <div type="button" class="btn-edit">
                <img src="/assets/img/edit.svg" class="img-icon">
            </div>
            <div type="button" class="btn-edit">
                <img src="/assets/img/trash.svg" class="img-icon">
            </div>
        </div>

     `;
  if (modeEditActive) {
    document.querySelector(`carListItem_${id}`).outerHTML = html;
  } else {
    document
      .getElementById('carsList')
      .insertAdjacentHTML('beforeend', cardCar);
  }
}

// ________________________________ OPEN MODAL DELETE ________________________
function openModalDelete(id) {
  document.querySelector('.modal_container_2').style.display = 'block';

  const btnYes = document.querySelector('.delete_yes');

  btnYes.addEventListener('click', function () {
    deleteCar(id);
  });
}

// ________________________________ DELETE CAR ________________________
async function deleteCar(id) {
  const response = await fetch(`${baseUrl}/delete/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });

  const result = await response.json();
  alert(result.message);
}
