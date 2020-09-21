window.addEventListener('input', () => {
  let num_A = parseInt(document.querySelector('#input_A').value);
  let num_B = parseInt(document.querySelector('#input_B').value);

  // SOMA
  var somaNum = document.querySelector('#soma');
  somaNum.innerText = num_A + num_B;

  // SUBTRACAO A-B
  var sub_1 = document.querySelector('#subtração_1');
  sub_1.innerText = num_A - num_B;

  // SUBTRACAO B-A
  var sub_2 = document.querySelector('#subtração_2');
  sub_2.innerText = num_B - num_A;

  // MULTIPLICAÇÃO A X B
  var multnum = document.querySelector('#multiplicacao');
  multnum.innerText = num_A * num_B;

  // DIVISÃO A/B
  var divideNum = document.querySelector('#divisao');
  divideNum.innerText = num_A / num_B;

  // DIVISÃO B/A
  var divide2Num = document.querySelector('#divisao_2');
  divide2Num.innerText = num_B / num_A;

  // EXPONENCIAL DE A
  var expA = document.querySelector('#exponencial_A');
  expA.innerText = num_A ** 2;

  // EXPONENCIAL DE B
  var expB = document.querySelector('#exponencial_B');
  expB.innerText = num_B ** 2;

  // DIVISAO DE INTEIROS DE A
  var dividA = document.querySelector('#divisao_inteiros_A');
  dividA.innerText = divisorInteiro(num_A);

  function divisorInteiro(number) {
    let vetor = [];
    for (let index = 1; index <= number; index++) {
      if (number % index === 0) {
        vetor.push(index);
      }
    }
    return vetor;
  }

  // DIVISAO DE INTEIROS DE B
  var dividA = document.querySelector('#divisao_inteiros_B');
  dividA.innerText = divisorInteiro(num_B);

  function divisorInteiro(number) {
    let vetor = [];
    for (let index = 1; index <= number; index++) {
      if (number % index === 0) {
        vetor.push(index);
      }
    }
    return vetor;
  }

  // FATORIAL DE A
  var fatorialA = document.querySelector('#fatorial_A');
  fatorialA.innerText = fatorial(num_A);

  function fatorial(valor) {
    var resultado = valor;
    for (var index = 1; index < valor; index++) {
      resultado *= index;
    }
    return resultado;
  }

  // FATORIAL DE B
  var fatorialB = document.querySelector('#fatorial_B');
  fatorialB.innerText = fatorial(num_B);

  function fatorial(valor) {
    var resultado = valor;
    for (var index = 1; index < valor; index++) {
      resultado *= index;
    }
    return resultado;
  }
});
