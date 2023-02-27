const hotdogPrice = 4.00;
const frenchfriesPrice = 3.50;
const sodaPrice = 1.75;
let hotdogsQuant = 0;
let frenchfriesQuant = 0;
let sodasQuant = 0;
let subtotal = 0;
let discount = 0;
let tax = 0;
let total = 0;

window.onload = function () {
  // get quantity of each item using prompt function
  hotDogsQuant = prompt("Number of hot dogs:", 0);
  frenchFriesQuant = prompt("Number of french fries portions:", 0);
  sodasQuant = prompt("Number of sodas", 0);

  // get subtotal. prompt returns STRINGS, but js turns them into numbers with when math
  // signs are encountered

  subtotal = (hotdogPrice * hotDogsQuant) + (frenchfriesPrice * frenchfriesQuant) + 
             (sodaPrice * sodasQuant);

  // discount if subtotal before tax at least $20
  if (subtotal >= 20) {
    discount = subtotal * 0.1;
  }

  // calculate food tax
  tax = (subtotal - discount) * 0.0625;

  // total after tax
  total = subtotal - discount + tax;

  // insert into display table
  document.getElementById("hotdogs-quantity").innerHTML = hotDogsQuant;
  document.getElementById("frenchfries-quantity").innerHTML = frenchfriesQuant;
  document.getElementById("sodas-quantity").innerHTML = sodasQuant;
  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
  document.getElementById("discount").innerHTML = "-$" + discount.toFixed(2);
  document.getElementById("tax").innerHTML = "+$" + tax.toFixed(2);
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
};