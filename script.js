/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable max-lines-per-function */
/* eslint-disable brace-style */
/* eslint-disable operator-linebreak */
/* eslint-disable padded-blocks */
/* eslint-disable complexity */
/* eslint-disable no-empty */
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
let paiCartaGerada = document.querySelector('#carta-gerada');

let classe = {
  estilo: ['newspaper', 'magazine1', 'magazine2'],
  tamanho: ['medium', 'big', 'reallybig'],
  rotacao: ['rotateleft', 'rotateright'],
  inclinacao: ['skewleft', 'skewright'],
};

btnCarta.addEventListener('click', gerarCarta);

function gerarCarta(){
  paiCartaGerada.innerHTML = '';
  let novaCarta = textInput.value.split(' ');
  let totalCaracteres = textInput.value;
  let count = 0;
  for (let i = 0; i < totalCaracteres.length; i += 1) {
    if (totalCaracteres[i] === ' ') {
        count += 1;
    }
  }
  if (totalCaracteres.length === count || textInput.value === '') {
      paiCartaGerada.innerText = "Por favor, digite o conteúdo da carta.";
  } 
  else {
    for (let index = 0; index < novaCarta.length; index += 1) {
      let sort1 = Math.floor(Math.random() * 3);
      let sort2 = Math.floor(Math.random() * 3);
      let sort3 = Math.floor(Math.random() * 3);
      let sort4 = Math.floor(Math.random() * 3);

      let filhoNovaCarta = document.createElement('span');
      filhoNovaCarta.innerText = novaCarta[index];
      filhoNovaCarta.classList.add(classe.estilo[sort1]);
      filhoNovaCarta.classList.add(classe.rotacao[sort2]);
      filhoNovaCarta.classList.add(classe.tamanho[sort3]);
      filhoNovaCarta.classList.add(classe.inclinacao[sort4]);
      filhoNovaCarta.classList.remove('undefined');
      paiCartaGerada.appendChild(filhoNovaCarta);
    }
      document.querySelector('#carta-contador').innerText = novaCarta.length;
    changeStyle();
  }
}

function changeStyle(){
  document.querySelectorAll('span').forEach(item => {
    item.addEventListener('click', event => {
      let sort1 = Math.floor(Math.random() * 3);
      let sort2 = Math.floor(Math.random() * 3);
      let sort3 = Math.floor(Math.random() * 3);
      let sort4 = Math.floor(Math.random() * 3);
      event.target.className = '';
      event.target.classList.add(classe.estilo[sort1]);
      event.target.classList.add(classe.rotacao[sort2]);
      event.target.classList.add(classe.tamanho[sort3]);
      event.target.classList.add(classe.inclinacao[sort4]);
      event.target.classList.remove('undefined');
    });
  });
}  
