function clearInp() {
  document.getElementById('inp').value = '';
}
function showResult() {
  let a = document.getElementById('inp').value;
  let b = eval(a);
  if (b != undefined) {
    document.getElementById('inp').value = b;
  }
}

function calculate(val) {
  let ans = document.querySelector('#inp');

  ans.value += val;
}
