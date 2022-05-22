const { assert } = require("chai");
const raiz = require("../funcoes/funcao-raiz");

describe("Testando a função raiz", function () {
  describe("1º teste: Somente um parametro", function () {
    it("Testando com valor possivel de executar", function () {
      const Resultado = raiz(9);
      assert.equal(Resultado, 3);
    });
  })
})