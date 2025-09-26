/*
while (condicao)
    {

    }
/////////////////////////////////////////////
do 
    {

    }
while (condicao)

////////////////////////////////////////////

     inicializacao, condicao, atualizacao
for (let x=1; x<10; x=+1)
    {
    }

*/

alert('Exercicio 03 - Escreva um programa que solicite 5 números ao usuário e exiba ao final apenas o maior deles');

m_contador = 0;
m_maior = 0;
do  {
        m_contador = m_contador + 1; 
        m_numero = prompt('Digite 1 numero: ');
        m_numero = Number(m_numero);
        if (m_numero > m_maior)
            {
                m_maior = m_numero;
            }
        console.log('o contador é: ' + m_contador);
        console.log('o numero é..: ' + m_numero);
        console.log('o maior é...: ' + m_maior);
    }
    while 
        ( 
            m_contador <= 4
        );
        

console.log('O maior número digitado é: ' + m_maior);
    

