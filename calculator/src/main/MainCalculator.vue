<template>
  <div class="calculadora">
    <div class="display">{{ numeroAtual || "0" }}</div>
    <div v-on:click="limparDisplay" class="botao">C</div>
    <div v-on:click="raiz" class="botao">√</div>
    <div v-on:click="porcentagem" class="botao">%</div>
    <div v-on:click="dividir" class="botao operadores">÷</div>
    <div v-on:click="adicionarNumeros('7')" class="botao">7</div>
    <div v-on:click="adicionarNumeros('8')" class="botao">8</div>
    <div v-on:click="adicionarNumeros('9')" class="botao">9</div>
    <div v-on:click="multiplicar" class="botao operadores">x</div>
    <div v-on:click="adicionarNumeros('4')" class="botao">4</div>
    <div v-on:click="adicionarNumeros('5')" class="botao">5</div>
    <div v-on:click="adicionarNumeros('6')" class="botao">6</div>
    <div v-on:click="diminuir" class="botao operadores">-</div>
    <div v-on:click="adicionarNumeros('1')" class="botao">1</div>
    <div v-on:click="adicionarNumeros('2')" class="botao">2</div>
    <div v-on:click="adicionarNumeros('3')" class="botao">3</div>
    <div v-on:click="somar" class="botao operadores">+</div>
    <div v-on:click="adicionarNumeros('0')" class="botao zero">0</div>
    <div v-on:click="ponto" class="botao">.</div>
    <div v-on:click="resultado" class="botao operadores">=</div>
  </div>
</template>

<script>
import soma from "../funcoes/funcao-soma";
import subtracao from "../funcoes/funcao-subtracao";
import divisao from "../funcoes/funcao-divisao";
import multiplicacao from "../funcoes/funcao-multiplicacao";
import raiz from "../funcoes/funcao-raiz";
import porcentagem from "../funcoes/funcao-porcentagem";

export default {
  data: function () {
    return {
      numeroAtual: "",
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,
    };
  },

  methods: {
    limparDisplay() {
      this.numeroAtual = "";
    },

    sinal() {
      this.numeroAtual =
        this.numeroAtual.charAt(0) === "-"
          ? this.numeroAtual.slice(1)
          : `-${this.numeroAtual}`;
    },

    adicionarNumeros(numero) {
      if (this.operadorClicado) {
        this.numeroAtual = "";
        this.operadorClicado = false;
      }

      this.numeroAtual = `${this.numeroAtual}${numero}`;
    },

    ponto() {
      if (this.numeroAtual.indexOf(".") === -1) {
        this.adicionarNumeros(".");
      }
    },

    setarnumero() {
      this.numeroAnterior = this.numeroAtual;
      this.operadorClicado = true;
    },

    raiz() {
      this.numeroAtual = raiz(this.numeroAtual);
    },

    porcentagem() {
      this.numeroAtual = porcentagem(this.numeroAtual);
    },

    dividir() {
      this.operador = (Resultado, numeroAtual) =>
        divisao(Resultado, numeroAtual);
      this.setarnumero();
    },

    multiplicar() {
      this.operador = (Resultado, numeroAtual) =>
        multiplicacao(Resultado, numeroAtual);
      this.setarnumero();
    },

    diminuir() {
      this.operador = (Resultado, numeroAtual) =>
        subtracao(Resultado, numeroAtual);
      this.setarnumero();
    },

    somar() {
      this.operador = (Resultado, numeroAtual) => soma(Resultado, numeroAtual);
      this.setarnumero();
    },

    resultado() {
      this.numeroAtual = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.numeroAtual)
      )}`;
      this.numeroAnterior = null;
    },
  },
};
</script>

<style>
.calculadora {
  margin: 0 auto;
  width: 350px;
  font-size: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: minmax(50px, auto);
  cursor: pointer;
}

.display {
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
}

.zero {
  grid-column: 1 / 3;
}

.botao {
  color: black;
  font-size: 1.4em;
  background-color: #f0f0f0;
  border: none;
  border-right: #f0f0f0;
  border-bottom: #f0f0f0;
  outline: none;
}

.operadores {
  background-color: orange;
  color: white;
}
</style>
