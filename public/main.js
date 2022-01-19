const locationContainer = document.querySelector("#location-container");
const form = document.querySelector("form");
const baseURL = "/";
// const rentalsEntry = (rentals) => showRentals(rentals);
// const button = document.querySelector("#add-tool-button")

// const getAllEntries = () => axios.get(`/tools`)
//     .then((res) => {rentalsEntry(res.data);})
//     .catch((err) => console.log(err));

const addEntry = (body) => axios.post(`/tools`, body)
    .then((res) => {rentalsEntry(res.data);})
    .catch((err) => console.log(err));

// const deleteEntry = (id) =>
//   axios.delete(`/tools/${id}`)
//     .then((res) => {rentalsEntry(res.data);})
//     .catch((err) => console.log(err));

function submitButton(e) {
  console.log('submitButton')
  e.preventDefault();

  // let id = { id }
  let name = document.querySelector("#name");
  let typetool = document.querySelector("#typetool");
  let image = document.querySelector("#picture");
  let returns = document.querySelector("#returns");

  let bodyObj = {
    name: name.value,
    typetool: typetool.value,
    image: image.value,
    returns: returns.value,
  };

  // createNewEntry(bodyObj)
  addEntry(bodyObj)

  name.value = ""
  typetool.value = ""
  image.value = ""
  returns.value = ""
};

function createNewEntry(rentals) {
  const rentalEntry = document.createElement("div");
  rentalEntry.classList.add("location-card");

  rentalEntry.innerHTML = `<p class="rentals-name-typetool">${rentals.name}, ${rentals.typetool}</p>
    <img alt='rentals image' src=${rentals.image} class="location-photo"/>
    <p class="rentals-returns"> ${rentals.returns}</p>
    <button onclick="deleteEntry(${rentals.id})">Delete</button>`;

  locationContainer.appendChild(rentalEntry);
};

function showRentals(arr) {
  locationContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createNewEntry(arr[i]);
  }
};

const test=() => {console.log('yes')}
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target)
});
// console.log(button)
// getAllEntries();

// ScrewDriver Modal
var modal = document.getElementById("screwdriverModal");

var driverBtn = document.getElementById("screwDrivers");

var span = document.getElementsByClassName("close")[0];

driverBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Sockets and Rachets Modal
var modal = document.getElementById("socketModal");

var socketBtn = document.getElementById("socketsRatchets");

var span = document.getElementsByClassName("close")[1];

socketBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Pliers Modal

var modal = document.getElementById("pliersModal");

var pliersBtn = document.getElementById("pliers");

var span = document.getElementsByClassName("close")[2];

pliersBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Power locations-container Modal

var modal = document.getElementById("powerModal");

var powerBtn = document.getElementById("powerTools");

var span = document.getElementsByClassName("close")[3];

powerBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Specialty locations-container Modal

var modal = document.getElementById("specialtyModal");

var specialtyBtn = document.getElementById("specialtyTools");

var span = document.getElementsByClassName("close")[4];

specialtyBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Box End Wrenches Modal

var modal = document.getElementById("boxendModal");

var boxendBtn = document.getElementById("boxEnd");

var span = document.getElementsByClassName("close")[5];

boxendBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Misc heavy Modal

var modal = document.getElementById("heavyModal");

var heavyBtn = document.getElementById("heavyTools");

var span = document.getElementsByClassName("close")[6];

heavyBtn.onclick = function () {
  modal.style.display = "block";
};

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
