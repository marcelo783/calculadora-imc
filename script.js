
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

      const valorIMC = (peso / (altura *altura)).toFixed(1);

      resultado.textContent = valorIMC;

      let classificacao = "";

      if(valorIMC < 18.5){
          classificacao = 'abaixo do peso.'
      }else if (valorIMC < 25){
          classificacao =   'peso ideall'
      }else if (valorIMC < 30){
          classificacao = 'levemente acima '

      }else if  (valorIMC < 35) {
          classificacao = 'com obsedade grau 1.'
      }else if (valorIMC < 40){
          classificacao = 'obsedidade grau 2 '

      }else {
          classificacao = "grau 3 cuidado"
      }



      resultado.textContent = `${nome} seu IMC é ${valorIMC}e voces está ${classificacao}`

    }else {
    resultado.textContent = 'preencha todos os  campos!!'
    }
}

calcular.addEventListener("click", imc);