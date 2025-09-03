import {aleatorio} from './aleatorio.ja';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resuultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;

botaoIniciar.addEventListener ('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    telaInicial.computedStyleMap.display = 'nome';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[Atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {}

function mostraResultado() {
    caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}