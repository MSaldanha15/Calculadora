const { assert } = require("chai");
const porcentagem = require("../funcoes/funcao-porcentagem");

describe("Testando a função porcentagem", function () {
  describe("1º teste: Somente um parametro", function () {
    it("Testando com valor possivel de executar", function () {
      const Resultado = porcentagem(50);
      assert.equal(Resultado, 0.5);
    });
  })
})