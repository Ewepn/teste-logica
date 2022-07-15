// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//RESPOSTA//

//O código foi dividido em 3 funções cada uma com apenas uma responsabilidade
//# A função fibonacci cria um array com a sequência de fibonacci do valor informado na chamada da função
//# A função fiboProcura é responsável por encontrar o valor informado dentro do array de fibonacci criado
//# A função fiboPertence imprime o array e o resultado da procura feita na função fiboProcura
const fibonacci = (numero) => {
	let anterior = 0;
	let atual = 1;
	let fiboArray = new Array(anterior, atual);

	for (let i = 0; i < numero; i++) {
		const proximo = anterior + atual;
		anterior = atual;
		atual = proximo;
		fiboArray.push(proximo);
	}

	return fiboProcura(numero, fiboArray);
};

const fiboProcura = (numero, array) => {
	let encontrado = false;
	array.find((item) => {
		item === numero ? (encontrado = true) : "";
	});

	return fiboPertence(numero, array, encontrado);
};

const fiboPertence = (numero, array, encontrado) => {
	console.log(array);

	if (encontrado === true) {
		console.log(`O valor ${numero} pertence a sequência de fibonacci!`);
	} else {
		console.log(`O valor ${numero} não pertence a sequência de fibonacci!`);
	}
};

fibonacci(8); //insira nessa chamada de função o valor que desejar!
