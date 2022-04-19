 // criando uma calculadora
function calculadora() {

    // definindo as operações e pegando valor de entrada do usuário
    // usamos "\n" para fazer uma quebra de linha
    const operacao = Number(prompt('Escolha uma opçao:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao real (/)\n 5 - Divisao inteira (%)\n 6 - Potenciacao (**)'));
    
    // verificando se a operaçao é valida
    if (!operacao ||  operacao >= 7) {
        alert('erro - operacao invalida');
        calculadora();
    } else {

        // definindo variáveis
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // verificando se as variáveis sao validas
        if (!n1 || !n2) {
            alert('erro - parametros invalidos');
            calculadora();
        } else {
            if (operacao == 1) {
                soma();
            }
            if (operacao == 2) {
                subtracao();
            }
            if (operacao == 3) {
                multiplicacao();
            }
            if (operacao == 4) {
                divisaoReal();
            }
            if (operacao == 5) {
                divisaoInteira();
            }
            if (operacao == 6) {
                potenciacao();
            }

            // definindo as funções
            function soma() {
                resultado = n1 + n2;

                // mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} e igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} potencia e ${resultado}`);
                novaOperacao();
            }

            // nova operaçao
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Nao');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opçao valida!');
                    novaOperacao();
                }
            }
        }
    } 
}
calculadora();