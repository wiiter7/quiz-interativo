import {aleatorio} from './aleatorio.ja';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resuultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener ('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
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

function mostraAlternativas() {
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()==> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
   if(opcaoSelecionada.proxima !== undefined) {
       atual = opcaoSelecionada.proxima;
   }else {
       mostraResultado();
       return;
   }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
    atual = 0;
    historia = "";
    caixaResultado.classList,remove("mostrar");
    mostrarPergunta();
}

function substituiNOme() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pegunta.enunciado.replace(/você/g, nome);
    }
  }
substituiNome();
