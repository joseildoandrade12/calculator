const numeros = document.querySelectorAll(".num");
const valor = document.querySelector(".valor");
const limpar = document.querySelector(".limpar");
const sinais = document.querySelectorAll(".sinais .button");
const ponto = document.querySelector('.ponto');
const resultado = document.querySelector(".resultado");
let value = "";

ponto.addEventListener('click', () => {
  calcularNumeros(ponto.value)
})

limpar.addEventListener("click", limparValor);
function limparValor() {
  valor.innerText = "";
  value = "";
}

sinais.forEach((sinal) => {
  sinal.addEventListener("click", () => {
    calcularNumeros(sinal.value);
  });
});

numeros.forEach((num) => {
  num.addEventListener("click", () => {
    calcularNumeros(num.value);
  });
});

function calcularNumeros(n) {
  valor.innerText += n;
  return (value = valor.innerText);
}
resultado.addEventListener("click", valorFinal);

function valorFinal() {
  if (value === "") {
    alert("Digite um valor");
  } else {
    valor.innerText = eval(value);
  }
}
