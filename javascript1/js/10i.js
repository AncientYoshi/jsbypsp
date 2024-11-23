let calculation = localStorage.getItem("calculation") || "";
document.querySelector(".cal-p").innerHTML = calculation;

function updatecalculation(x) {
  calculation += `${x}`;

  savecalculation();
  //document.querySelector(".cal-p").innerHTML = calculation;
  return calculation;
}
function savecalculation() {
  localStorage.setItem("calculation", calculation);
  document.querySelector(".cal-p").innerHTML = calculation;
}
