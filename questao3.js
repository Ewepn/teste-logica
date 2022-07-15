// NÃO RECEBI OS DADOS json/xml para concluir a questão, então criarei valores aleatorios para concluir a lógica do programa !

// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

//A função faturamentoDiario faz a soma do lucro diario
//A função menorMaiorLucro faz a verificação do menor e maior valor recebido no dia
//A função compararLucroDiaMes compara se o lucro do dia foi maior que a média mensal
const faturamentoSegunda = [200, 250, 400, 580, 3000, 5, 600, 50, 20, 100];
const faturamentoTerça = [40, 2950, 20, 40, 200, 400, 450, 650, 700, 90];
const faturamentoQuarta = [50, 10, 500, 700, 900, 750, 6, 2, 280, 310];
const faturamentoQuinta = [220, 20, 10, 58, 450, 780, 120, 145, 148, 601];
const faturamentoSexta = [3100, 10, 14, 145, 478, 1456, 32, 2147, 32, 11];
const faturamentoSabado = []; // dia sem lucro
const faturamentoDomingo = []; // dia sem lucro
const mediaMensal = 2900;

let maiorNumero = 0;
let menorNumero = 0;

const faturamentoDiario = (dia, faturamento) => {
	let faturaDiaria = 0;

	for (let i = 0; i < faturamento.length; i++) {
		faturaDiaria = faturaDiaria + faturamento[i];
	}
	console.log(
		`O faturamento de ${dia} foi de: ${faturaDiaria.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`
	);

	compararLucroDiaMes(dia, faturaDiaria);
};

const menorMaiorLucro = (dia, faturamento) => {
	for (let i = 1; i < faturamento.length; i++) {
		if (faturamento[i] > faturamento[maiorNumero]) {
			maiorNumero = i;
		} else if (faturamento[i] < faturamento[menorNumero]) {
			menorNumero = i;
		}
	}
	console.log(
		`O maior valor de ${dia} foi: ${faturamento[maiorNumero].toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`
	);
	console.log(
		`O menor valor de ${dia} foi: ${faturamento[menorNumero].toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`
	);
};

const compararLucroDiaMes = (dia, lucro) => {
	if (lucro > mediaMensal) {
		console.log(
			`O lucro de ${dia} no valor de ${lucro.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			})} foi maior que a média mensal de ${mediaMensal.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			})} `
		);
	}
};

faturamentoDiario("Segunda", faturamentoSegunda);
faturamentoDiario("Terça", faturamentoTerça);
faturamentoDiario("Quarta", faturamentoQuarta);
faturamentoDiario("Quinta", faturamentoQuinta);
faturamentoDiario("Sexta", faturamentoSexta);
faturamentoDiario("Sabado", faturamentoSabado);
faturamentoDiario("Domingo", faturamentoDomingo);
menorMaiorLucro("Segunda", faturamentoSegunda); //troque aqui o dia que deseja verificar o menor/maior lucro
