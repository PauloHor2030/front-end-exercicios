/*
step debuger , esta dentro do Sources, basta clicar na linha que ja marca o BreakPoint


const quadrado = function (x, z, z)
    {
    return x *x;
    }
constante que ira armazenar a funcao 
function = é uma instrucao function
x, y, z são os parametros
return x, quando uma funcao que nao retorna nada, ela retorna undefined


const quadrado = function (x)
    {
    return x *x;
        
    }


const aviso = function (mensagem)
    {
    console.log(mensagem);
    }

aviso("Hora do invetervalo");


// main.js

// Flag de controle
let m_escape = true;

// Captura a tecla ESC, definindo que se teclar Escape, terá ações
document.addEventListener("keydown", function(event) 
{
    if (event.key === "Escape") 
        {
            m_escape = false;
            console.log("ESC pressionado -> encerrando o loop");
        }
});

// Função que executa continuamente
function iniciarLoop() 
{
    if (!m_escape) {
        console.log("Loop finalizado.");
        return; // encerra a função
    }

    // Aqui vai a lógica do seu loop
    let m_numero = prompt("Digite qualquer coisa para ser registrado:");
    console.log("O número digitado é: " + m_numero);

    // Chama de novo -> simula o loop
    setTimeout(iniciarLoop, 1000); // 1 segundo de intervalo (ajustável)
}

// Inicia o loop
iniciarLoop();

// console.log aceita multiplos parametros
console.log("mensagem1", "mensagem2", quadrado(3));

2. outra forma de declaracao de funcao, as funcoes assim declaradas sao globais:
function quadrado(x)
    {
        return x * x;
    }

3. forma de declaracao de funcao  Arrow Functions
const quadrado = (x) =>
    {
        return x * x;
    }


const quadrado = (x) => x * x    , isto é outra forma de escrever


// ----------------------------------------------------------------------------------------


alert("Exercicio 1 - Escreva uma função que aceita 1 (um) parâmetro e exibe no console a variável recebida como argumento");

let x = -0.0;
let m_area = 0.0;

const m_area_circulo = function( x )
    {
        return x * x * 3.1415;
    }

m_raio = prompt("Digite o raio do circulo: ");
m_raio = parseFloat(m_raio);

m_area = m_area_circulo(m_raio);


console.log("a area de raio: " + m_raio + " é: " + m_area);


alert("Exercicio 2 - Escreva uma função que aceita 1 (um) parâmetro e exibe no console o tipo da variável recebida como argumento;");



const tipo_variavel = function( p_parametro )
    {
        return typeof(p_parametro);
        
    }

m_pega = prompt("Digite qq coisa: ");
m_voltado = tipo_variavel(m_pega);

console.log("tipo de variavel é: " + m_voltado);
tipo_variavel("isso é texto");
tipo_variavel(33);
tipo_variavel(True);


alert("Exercicio 3 - Escreva uma função que aceita 2 (dois) parâmetros e retorna o menor valor dentre eles");



const m_area_retangulo = function( x,y )
    {
        if (x > y)
            {
                console.log("parametro 1 é maior que o 2");
            }
        else
            if (y > x)
                {
                    console.log("parametro 2 é maior que o 1");
                }
            else
                {
                    console.log("sao iguais");
                }    
            }


m_area_retangulo(4,5);

// 
alert("Exercicio 4 - Escreva 4 (quatro) funções que aceitam 2 (dois) parâmetros cada, cada uma delas deve realizar uma das 4 (quatro) operações matemáticas básicas (soma, subtração, divisão e adição), retorne o resultado de cada operação em cada uma delas");


m_numero1 = prompt("Digite o primeiro valor: ");
m_numero2 = prompt("Digite o segundo  valor: ");

m_numero1 = Number(m_numero1);
m_numero2 = Number(m_numero2);

const f_soma = function(m_numero1, m_numero2)
{
    return m_numero1 + m_numero2;
}
const f_subt = function(m_numero1, m_numero2)
{
    return m_numero1 - m_numero2;
}
const f_veze = function(m_numero1, m_numero2)
{
    return m_numero1 * m_numero2;
}
const f_divi = function(m_numero1, m_numero2)
{
    return m_numero1 / m_numero2;
}
m_somar = f_soma(m_numero1, m_numero2);
m_subtrair= f_subt(m_numero1, m_numero2);
m_multiplicacao = f_veze(m_numero1, m_numero2);
m_divisao = f_divi(m_numero1, m_numero2);

console.log("Soma deu: " + m_somar);
console.log("Subtração deu: " + m_subtrair);
console.log("Multiplicaçã0 deu: " + m_multiplicacao);
console.log("Divisão deu: " + m_divisao);


alert("Exercicio 6 - pegar 3 numeros e fazer o maior");


const f_maiordeles = function(p_numero1, p_numero2, p_numero3)
{
    m_maior = 0;
    p_numero1 = Number(p_numero1);
    p_numero2 = Number(p_numero2);
    p_numero3 = Number(p_numero3);
    
    if (typeof p_numero1 !== "number" || typeof p_numero2 !== "number" || typeof p_numero3 !== "number")
        {
            console.log("Tem parâmetro que não é número válido! ");    
            return ("Erro nos parâmetros. Tente de novo");
        }
    else
        {
            m_maior = p_numero1;
            if (p_numero2 > m_maior)
                {
                    m_maior = p_numero2;
                }
            if (p_numero3 > m_maior)
                {
                    m_maior = p_numero3;
                }    
            return ("O maior numero é: " + m_maior);    
        }
}


console.log(f_maiordeles(23,15,9));


const f_conjunto = function(p_numero1)
{
    
    if (typeof p_numero1 !== "number" )
        {
            console.log("o parametro não é um numero! ");    
            return ("Erro no parâmetro numerico. Tente de novo");
        }
    else
        {
            p_numero1 = Number(p_numero1);
            if (p_numero1 > 0 ) 
                {
                    return "O número é positivo";
                }
            else if(p_numero1 < 0)
                {
                    return "O número é negativo";
                }
            else
                {
                    return "O número é zero";
                }
        }
}

console.log(f_conjunto(0));


alert("Exercicio 8 - pegar 3 numeros e fazer o maior");


const f_iguais = function(p_numero1, p_numero2, p_numero3)
{
    m_maior = 0;
    p_numero1 = Number(p_numero1);
    p_numero2 = Number(p_numero2);
    p_numero3 = Number(p_numero3);
    
    if (typeof p_numero1 !== "number" || typeof p_numero2 !== "number" || typeof p_numero3 !== "number")
        {
            console.log("Tem parâmetro que não é número válido! ");    
            return ("Erro nos parâmetros. Tente de novo");
        }
    else
        {
            let m_igual = 0;
            if (p_numero1 === p_numero2)
                {
                    m_igual = m_igual + 1;
                }
            
            if (p_numero1 === p_numero3)
                {
                    m_igual = m_igual + 1;
                }

            if (p_numero2 === p_numero3)
                {
                    m_igual = m_igual + 1;
                }
            return ("Tem " + m_igual + " números iguais");

        }
}


console.log(f_iguais(2,2,2));


alert("Exercicio 9 - digitar mes de nascimento e o ultimo digito de nascimento");




const m_nome_sobrenome_sugerido = function(p_par01, p_par02 )
    {
        let m_parte1 = true;
        let m_parte2 = true;
        if (typeof p_par01 !== "number" || p_par01 < 0 || p_par01 > 12)
            {
                m_parte1 = false;
                console.log("o mês de nascimento não é de 1 a 12. Tente de novo");
            } 
        
        if (typeof p_par02 !== "number" || p_par02 < 0 || p_par02 > 9)
            {
                m_parte2 = false;
                console.log("o mês de nascimento não é de 1 a 12. Tente de novo");
            } 
        if (m_parte1 && m_parte2)
            {
                switch (p_par01)
                    {
                        case 1: 
                            m_nome = "Kevin";
                            break;
                        case 2:
                            m_nome = "Adrian";
                            break;
                        case 3:
                            m_nome = "Gary";
                            break;
                        case 4:
                            m_nome = "Albert";
                            break;
                        case 5:
                            m_nome = "Guccifer";
                            break;
                        case 6:
                            m_nome = "Jonathan";
                            break;
                        case 7:
                            m_nome = "George";
                            break;
                        case 8:
                            m_nome = "LulzSec";
                            break;
                        case 9:
                            m_nome = "Julian";
                            break;
                        case 10:
                            m_nome = "Aaron";
                            break;
                        case 11:
                            m_nome = "Chris";
                            break;
                        case 12:
                            m_nome = "LMark";
                            break;                                                       
                    }
                switch (p_par02)
                    {
                        case 1: 
                            m_sobrenome = "Mitnick";
                            break;
                        case 2:
                            m_sobrenome = "Lamon";
                            break;
                        case 3:
                            m_sobrenome = "McKinnon";
                            break;
                        case 4:
                            m_sobrenome = "Gonzalez";
                            break;
                        case 5:
                            m_sobrenome = "James";
                            break;
                        case 6:
                            m_sobrenome = "Jonathan";
                            break;
                        case 7:
                            m_sobrenome = "Poulsen";
                            break;
                        case 8:
                            m_sobrenome = "Doom";
                            break;
                        case 9:
                            m_sobrenome = "Deception";
                            break;
                        case 0:
                            m_sobrenome = "CalceCalce";
                            break;
                                                                               
                    }
                return (m_nome +" "+m_sobrenome);
            }
        else
            {
                return ("Dados Errados ");
            }
    }

m_mes_nascimento = Number(prompt("Digite o mes de nascimento.................: "));
m_ano_nascimento = Number(prompt("Digite o ultimo digito do ano de nascimento: "));

m_aluno = m_nome_sobrenome_sugerido(m_mes_nascimento, m_ano_nascimento); 
console.log("o seu nome sugerido é: " + m_aluno);

*/


alert("Exercicio 10 - Escreva uma função que aceita até 3 (três) parâmetros: tipo de forma ('quadrado' ou 'retangulo'), e as medidas necessárias. Retorne a área calculada: Quadrado: um lado; Retângulo: largura e altura");






const m_nome_sobrenome_sugerido = function(p_par01, p_par02 )
