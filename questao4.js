// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

//O programa foi dividido em 3 função cada uma com uma responsabilidade
// A função converterValor "converte" o valor recebido para o real brasileiro e os guarda dentro de um array!
// A função valorTotal recebe o array e a soma dos seus valores
// A função porcentagemValor faz o calculo de porcentagem que cada estado representa no valor total!
const arrayValores = new Array();
let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let outros = 19849.53;
let somaValores = 0;

const converterValor = (estado, valor) => {
	const faturamento = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
	arrayValores.push(valor);
	console.log(estado, faturamento);
};

const valorTotal = (array) => {
	for (let i = 0; i < array.length; i++) {
		somaValores = somaValores + array[i];
	}

	console.log(
		`Total:`,
		somaValores.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
	);
};

const porcentagemValor = (estado, valor, total) => {
	let porcentagem = 0;

	porcentagem = (valor / total) * 100;
	console.log(
		`A porcentagem de ${estado} no valor total mensal é de: ${porcentagem.toFixed(2)}%`
	);
};

converterValor("SP", SP);
converterValor("RJ", RJ);
converterValor("MG", MG);
converterValor("ES", ES);
converterValor("outros", outros);
valorTotal(arrayValores);
porcentagemValor("SP", SP, somaValores);
porcentagemValor("RJ", RJ, somaValores);
porcentagemValor("MG", MG, somaValores);
porcentagemValor("ES", ES, somaValores);
porcentagemValor("outros", outros, somaValores);
