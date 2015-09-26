// Essa mensagem somente irá aparecer se você invocar a funcão exibirMensagem()
// em algum ligar deste script.
function exibirMensagem() {
	alert('Olá, seja bem-vindo(a)!');
}

// Apenas um var foi necessário e utilize letras minúsculas no início dos
// nomes das variáveis. Utilize letras maiúsculas no início apenas quando se
// trata de "Classes" ( ͡° ͜ʖ ͡°).
var saldo,
	numeroPessoas,
	dias,
	horas,
	resultado;

// Não esqueça que o método prompt transforma o que ele recebe em string,
// e precisamos transformar tudo em números (float).
numeroPessoas = prompt("Qual o número de pessoas a contratar?");
saldo = prompt('Qual é o valor do saldo?'); // Onde você está usando o saldo? :-(
dias = 20;
horas = 8;

// O valor 34.50 pode ser colocado em uma variável também, assim como você
// fez com dias e horas. Se alguém ler o seu código saberá o que este número
// representa.
resultado = numeroPessoas * (dias * (34.50 * horas));

alert('O valor final do investimento será: ' + resultado);

// Falta dizer ao usuário se o negócio é viável ou inviável;
// É necessário comparar se o valor do saldo é menor, maior ou
// igual ao resultado para ele descobrir. Monte uma resposta final, tipo,
// "O valor final do investimento será de R$ 100.000, portanto inviável."
