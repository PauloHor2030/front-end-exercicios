
alert('Exercicio 01 Faça um script em JavaScript que solicite um número ao usuário e verifique se ele é maior do que 10');
let idade = prompt('Digite a sua idade: ');
if (idade > 10)
    {
        console.log('Você tem mais de 10 anos')
    }
else
    {
    console.log('Você tem 10 anos ou menos')
    };

// ********************************************************************    
/* 
alert('Exercicio 02 Faça um script em JavaScript que solicite um número ao usuário e verifique se ele está entre 532 e 743.');
let numero = prompt('Digite um número: ');
if (numero >= 532 && numero <= 743)
    {
        console.log('O númnero está entre 532 e 743')
    }
else
    {
        console.log('O númnero NÃO está entre 532 e 743')
    };

// ********************************************************************    


alert('Exercicio 03 Faça um script em JavaScript que solicite uma senha ao usuário e verifique se ela é igual a uma string armazenada em uma variável no seu código');
senha_previa= 'Cachorro'
let senha_digitada = prompt('Digite a sua senha: ');
if (senha_digitada == senha_previa)
    {
        console.log('Você digitou a senha correta')
    }
else
    {
    console.log('Você NÃO digitou a senha correta')
    };


// ********************************************************************    


alert('Exercicio 04 Para uma pessoa realizar um consórcio em um banco, é necessário que ela tenha 18 anos ou mais e possua renda mensal de 2 (dois) salários mínimos. Faça um script em JavaScript que solicite a idade e a renda mensal do usuário e exiba a mensagem se ele está apto ou não realizar um consórcio');

m_idade= prompt('Digite a sua idade: ')
m_renda= prompt('Digite a sua renda mensal (em Reais): ')
if (m_idade >= 18 && m_renda >= 3016)
    {
        console.log('Você está apto a participar do consórcio')
    }
else
    {
        console.log('Você NÃO está apto a participar do consórcio')
    };

// ********************************************************************    


alert('Exercicio 05 - Em um concurso para professor em uma instituição de ensino. Digite a sua experiência e formação');
	// - Experiência:              até 5 anos = 10 pontos; 
    //                         5 anos ou mais = 20 pontos;
	// - Formação:                   superior = 10 pontos; 
    //                          pós-graduação = 20 pontos; 
    //                               mestrado = 30 pontos; 
    //                              doutorado = 40 pontos;
	// Faça um script em JavaScript que solicite a experiência e a formação do candidato, e calcule e exiba qual seria a sua pontuação para o concurso.');

m_experiencia = prompt('Digite os anos de experiência: ');
m_formacao    = prompt('Qual sua formação digite (1) superior, (2) pós, (3) metradao (4) doutorado');

m_pontos = 0; 
// m_experiencia = parseInt(m_experiencia);
// m_formacao = parseInt(m_formacao);

m_experiencia = (m_experiencia);
m_formacao = (m_formacao);
if (m_experiencia < 5)
    {
        m_pontos = m_pontos + 10
    };
if (m_experiencia >= 5)
    {
        m_pontos = m_pontos + 20
    };

if (m_formacao == 1)
    {
        m_pontos = m_pontos + 10
    };
if (m_formacao == 2)
    {
        m_pontos = m_pontos + 20
    };
if (m_formacao == 3)
    {
        m_pontos = m_pontos + 30
    };
if (m_formacao == 4)
    {
        m_pontos = m_pontos + 40
    };

console.log('A sua pontuação total é de: ' + m_pontos);

// ********************************************************************    


alert('Exercicio 06 Faça um script em JavaScript que solicite uma nota ao usuário e verifique se ela está entre 7.0 e 10.0')
let m_numero = prompt('Digite um número com decimais: ');
if (m_numero >= 7.0 && m_numero <=10.0)
    {
        console.log('Está entre 7.0 e 10.0')
    }
else
    {
    console.log('NÃO ESTÁ entre 7.0 e 10.0')
    };

    // ********************************************************************    

alert('Exercício 07 Para uma pessoa obter financiamento de veículo em uma concessionária, é necessário que ela tenha 21 anos ou mais e possua renda mensal de pelo menos R$ 3.000,00. Faça um script em JavaScript que solicite a idade e a renda mensal do usuário e exiba uma mensagem informando se ele está apto ou não para obter o financiamento.')
m_salario_minimo = 1518;
let m_idade = prompt('Digite a sua idade: ');
let m_renda = prompt('Digite a sua renda em Reais: ');
if (m_idade >= 21 || m_renda >= 3000)
    {
        console.log('Está apto a participar do financiamento')
    }
else
    {
        console.log('NÃO Está apto a participar do financiamento')
    };

    // ********************************************************************    



    alert('Exercicio 08 Em um programa de bolsa de estudos universitária, conta-se renda familiar e desempenho acadêmico. Então entre com os valores')
	// - Renda familiar: 
	// 	- até R$ 2.000 = 30 pontos;
	// 	- de R$ 2.001 a R$ 4.000 = 20 pontos;
	// 	- acima de R$ 4.000 = 10 pontos;
	// - Desempenho acadêmico:
	// 	- média até 6.9 = 5 pontos;
	// 	- média de 7.0 a 8.4 = 15 pontos;
	// 	- média de 8.5 a 10.0 = 25 pontos;')

let m_renda = parseFloat(prompt('Digite a sua renda familia, inclusive os centavos: '));
let m_desempenho = parseFloat(prompt('Digite o seu desempenho acadêmico, com decimais..: '));

m_pontos = 0;
if (m_renda <=2000)
    {
        m_pontos = m_pontos + 30
    };
if (m_renda >2000 && m_renda <= 4000)
    {
        m_pontos = m_pontos + 20
    };
if (m_renda >4000)
    {
        m_pontos = m_pontos + 10
    };
if (m_desempenho <= 6.9)
    {
        m_pontos = m_pontos + 5
    };
if (m_desempenho > 6.9 && m_desempenho <= 8.4)
    {
        m_pontos = m_pontos + 15
    };
if (m_desempenho > 8.4)
    {
        m_pontos = m_pontos + 25
    };

    console.log('A sua pontuação total é de: ' + m_pontos);
*/