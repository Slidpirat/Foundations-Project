// ScrewDriver Modal
var modal = document.getElementById("screwdriverModal");

var driverBtn = document.getElementById("screwDrivers");

var span = document.getElementsByClassName("close")[0];

driverBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Sockets and Rachets Modal
var modal = document.getElementById("socketModal");

var socketBtn = document.getElementById("socketsRatchets");

var span = document.getElementsByClassName("close")[1];

socketBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Pliers Modal

var modal = document.getElementById("pliersModal");

var pliersBtn = document.getElementById("pliers");

var span = document.getElementsByClassName("close")[2];

pliersBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Power Tools Modal

var modal = document.getElementById("powerModal");

var powerBtn = document.getElementById("powerTools");

var span = document.getElementsByClassName("close")[3];

powerBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Specialty Tools Modal

var modal = document.getElementById("specialtyModal");

var specialtyBtn = document.getElementById("specialtyTools");

var span = document.getElementsByClassName("close")[4];

specialtyBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Box End Wrenches Modal

var modal = document.getElementById("boxendModal");

var boxendBtn = document.getElementById("boxEnd");

var span = document.getElementsByClassName("close")[5];

boxendBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Misc heavy Modal

var modal = document.getElementById("heavyModal");

var heavyBtn = document.getElementById("heavyTools");

var span = document.getElementsByClassName("close")[6];

heavyBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
