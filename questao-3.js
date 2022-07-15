// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

//A função ftoMedioMensal recebe o array, soma e tira a média mensal
//A função menorMaiorLucro faz a verificação do menor e maior valor recebido do mês
//A função compararFaturamento compara se o lucro dos dias foram maiores do que a média mensal

const listaDeFaturamento = require("./questao3json"); //recebendo o Objeto do arquivo questao3json.js
let valorRendaDiaria = new Array();
let diaDaRenda = new Array();

valorRendaDiaria = listaDeFaturamento.map((faturamento) => faturamento.valor);
diaDaRenda = listaDeFaturamento.map((faturamento) => faturamento.dia);

let maiorNumero = 0;
let menorNumero = 0;
let faturaMedia = 0;

const ftoMedioMensal = (faturamento) => {
	for (let i = 0; i < faturamento.length; i++) {
		faturaMedia = faturaMedia + faturamento[i];
	}

	faturaMedia = faturaMedia / faturamento.length;
	console.log(
		`A média de faturamento mensal é de: ${faturaMedia.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`
	);
};

const menorMaiorLucro = (faturamento) => {
	for (let i = 0; i < faturamento.length; i++) {
		if (faturamento[i] > faturamento[maiorNumero]) {
			maiorNumero = i;
		} else if (faturamento[i] < faturamento[menorNumero]) {
			menorNumero = i;
		}
	}
	console.log(
		`O maior valor de faturamento do mês foi: ${faturamento[maiorNumero].toLocaleString(
			"pt-br",
			{
				style: "currency",
				currency: "BRL",
			}
		)}`
	);
	console.log(
		`O menor valor de faturamento do mês foi: ${faturamento[menorNumero].toLocaleString(
			"pt-br",
			{
				style: "currency",
				currency: "BRL",
			}
		)}`
	);
};

const compararFaturamento = (faturaMedia, rendaDiaria, diaDaRenda) => {
	for (i = 0; i < rendaDiaria.length; i++) {
		if (rendaDiaria[i] > faturaMedia) {
			console.log(
				`O valor ${rendaDiaria[i]} do dia ${diaDaRenda[i]} é maior que a média mensal`
			);
		}
	}
};

ftoMedioMensal(valorRendaDiaria);
menorMaiorLucro(valorRendaDiaria);
compararFaturamento(faturaMedia, valorRendaDiaria, diaDaRenda);
