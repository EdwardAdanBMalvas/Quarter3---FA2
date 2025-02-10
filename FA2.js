
function sum(x, y) {
  z = x + y;
  result('sum', x, y, z);
}

function diff(x, y) {
  z = x - y;
  result('difference', x, y, z);
}

function pro(x, y) {
  z = x * y;
  result('product', x, y, z);
}

function quo(x, y) {
  z = x / y;
  result('quotient', x, y, z);
}

function rem(x, y) {
  z = x % y;
  result('remainder', x, y, z);
}

function result(op, x, y, z) {
  document.getElementById('result').innerHTML = "The " +op+ " of " +x+ " and " +y+ " is " + z;
}