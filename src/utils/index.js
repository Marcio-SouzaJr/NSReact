export const sortObjects = (a, b) => {
  const clienteA = a.cliente.toUpperCase();
  const clienteB = b.cliente.toUpperCase();

  let comparison = 0;
  if (clienteA > clienteB) {
    comparison = 1;
  } else if (clienteA < clienteB) {
    comparison = -1;
  }
  return comparison;
};

export const getSum = (array) => {
  let sum45 = 0;
  let sum46 = 0;
  let sumEnsacado = 0;
  let sumCasca = 0;

  array.forEach((array) => {
    if (array.produto === "Farelo de Soja Granel 45%") {
      return (sum45 += array.volume);
    } else if (array.produto === "Farelo de Soja Granel 46%") {
      return (sum46 += array.volume);
    } else if (array.produto === "Farelo de Soja Ensacado") {
      return (sumEnsacado += array.volume);
    } else {
      return (sumCasca += array.volume);
    }
  });
  return [sum45, sum46, sumEnsacado, sumCasca];
};

export const filtrarContratos = (nome, contrato, produto) => {
  let contratos = [];
  if (nome === "") {
    contrato.map((contrato) => {
      return contratos.push(contrato);
    });
  } else {
    contrato.map((contrato) => {
      if (nome === contrato.cliente) {
        return contratos.push(contrato);
      }
    });
  }
  contratos = contratos.filter((contrato) => {
    if (produto === ""){
      return contrato
    }
    else {
      if (contrato.produto === produto) {
        return contrato
      }
    }
  })

  return contratos;
};

