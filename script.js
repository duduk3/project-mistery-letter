/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable space-before-blocks */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
let textInput = document.querySelector('#carta-texto');
let btnCarta = document.querySelector('#criar-carta');
let cartaGerada = document.querySelector('#carta-gerada');


btnCarta.addEventListener('click', gerarCarta);

function gerarCarta(){
    let numCaracteres = textInput.value;
    let count = 0;
    for (let i = 0; i < numCaracteres.length; i += 1) {
      if (numCaracteres[i] === ' ') {
          count += 1;
      }
    }
      if (numCaracteres.length === count || textInput.value === '') {
          cartaGerada.innerText = "Por favor, digite o conteúdo da carta.";
      }else {
          cartaGerada.innerText = textInput.value;
      }
  console.log(numCaracteres.length);
}