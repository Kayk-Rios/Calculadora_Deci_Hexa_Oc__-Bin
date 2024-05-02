
function soma() {
  var num1 = parseInt(document.getElementById("numb1").value, 10);
  var num2 = parseInt(document.getElementById("numb2").value, 10);
  var resultado = num1 + num2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtracao() {
  var num1 = parseInt(document.getElementById("numb1").value, 10);
  var num2 = parseInt(document.getElementById("numb2").value, 10);
  var resultado = num1 - num2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicacao() {
  var num1 = parseInt(document.getElementById("numb1").value, 10);
  var num2 = parseInt(document.getElementById("numb2").value, 10);
  var resultado = num1 * num2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function divisao() {
  var num1 = parseInt(document.getElementById("numb1").value, 10);
  var num2 = parseInt(document.getElementById("numb2").value, 10);

  if (num2 !== 0) {
    var resultado = num1 / num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  } else {
    document.getElementById("resultado").innerText = "Erro: Divisão por zero";
  }
}

// Divisao das calculadoras

function converter() {
  var val = parseInt(document.getElementById("numb").value, 10);

  document.getElementById("text1").innerText = val;
  document.getElementById("text2").innerText = val.toString(16);
  document.getElementById("text3").innerText = val.toString(8);
  document.getElementById("text4").innerText = val.toString(2);
}