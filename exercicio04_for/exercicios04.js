/*
step debuger , esta dentro do Sources, basta clicar na linha que ja marca o BreakPoint



alert('Exercicio 01 - Escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente, o programa deverá solicitar novamente uma entrada do usuário');
do  {
        m_numero = prompt('Digite um número 0 ou 1: ');
        m_numero = Number(m_numero);
    }
    while 
        ( 
            !(m_numero== 0  || m_numero == 1)
        );
       
console.log('O númnero digitado é: ' + m_numero)
    


alert('Exercicio 01 - Escreva um programa, utilizando for, que exiba os números de 0 a 100');


let m_numero;
for (m_numero = 0; m_numero <= 100; m_numero = m_numero + 1)
    {    
        console.log('Imprimindo o número...: ' + m_numero);
    }


alert("Escreva um programa em que o usuário insira o peso de 10 pessoas e calcule a média aritmética do peso delas");

let m_numero = 0;
let m_peso_ind =0;
let m_peso_tot = 0;
// m_numero++
// m_numero += 1
// m_numero = m_numero + 1
 
for (m_numero = 1; m_numero <=10; m_numero += 1)
    {   
        m_peso_ind = Number(prompt("Digite o seu peso individual.: ")); 
        m_peso_tot = m_peso_tot + m_peso_ind;
        console.log('Coletando o peso da pessoa: ' + m_numero);
        console.log('Peso da pessoa: ' + m_numero + ' é de '+m_peso_ind + ' kilos');
        console.log('Peso médio até agora é: ' + ( m_peso_tot/m_numero ) + ' kilos');
        
    };

    console.log('Peso médio é: ' + (m_peso_tot/(m_numero-1)) + ' kilos');
        
alert("Exercicio 3- Escreva um programa em que o usuário insira 10 números, exiba a contagem de quantos números inseridos são maiores do que 50");

let m_numero = 0;
let m_digitado =0;
let m_digitado_maior = 0;
for (m_numero = 1; m_numero <=10; m_numero = m_numero + 1)
    {   
        m_digitado = Number(prompt("Digite o seu número: "));
        console.log(m_numero + ' foi o seguinte conteúdo: ' + m_digitado);

        if (m_digitado > 50)
            {
                m_digitado_maior = m_digitado_maior + 1;
            }
    };

console.log('O número de vezes que o número foi > 50 é: ' + m_digitado_maior);
*/ 


alert("Complementar 1 - Escreva um programa que calcula a soma dos números de 0 até n, sendo n um número positivo maior que 1 inserido pelo usuário");

let m_numero   = 0;
let m_digitado = 0;
let m_somando  = 0;
m_digitado = Number(prompt("Digite o seu número que terá os anteriores somados: "));

for (m_numero = 0; m_numero <= m_digitado; m_numero = m_numero + 1)
    {   
        m_somando = m_somando + m_numero;
        console.log(m_numero + ' soma até agora : ' + m_somando);

    };

console.log('Somado é: ' + m_somando);
 
