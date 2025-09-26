// se usar let, a variavel fica sendo local, se nao usar let, será variavel global
 
// maior que, o console retorna o valor
console.log(5>10);

// diferente
console.log('Chuveiro'=='chuveiro')

// diferente
console.log('Chuveiro'!='chuveiro')

// maior ou igual que
console.log(5 >= 2 )


// menor ou igual que
console.log(5 <= 2 )

// se  - verificacao de condicao
if ( 5> 2 ) {
    console.log(' 5 é maior 2')    
}

if ('Chuveiro'=='Chuveiro') 
    {
    console.log('Verdadeiro, As strings são iguais')
    }
else 
    {
    console.log('Falsos,As string são diferentes')
    }


if ('Chuveiro'!='Chuveiro') 
    {
    console.log('Verdadeiro, As strings são iguais')
    }
else 
    {
    console.log('Falsos,As string são diferentes')
    }    



// operadores lógicos
// operador e &&
if (10>5 && 20>17) //verificando 2 condicoes simultaneamente 
    {
        console.log('10 é maior que 5 ** 20 é maior que 17')
    }


    modelo = 'Toro';
    marca = 'Fiat';
    ano = '2025';

    if (modelo == 'Punto' && marca == 'Fiat' && ano == '2024')
        {
            console.log('Carro é um Fiat Punto 2024')
        }
    else
        {
            console.log('Carro não é um Fiat Punto 2024')
        }


// operador ou ||
if (modelo == 'Mobi' || modelo == 'Uno')
        {
            console.log('O carro é um Mobi OU um Uno')
        }
    else
        {
            console.log('Não é Mobi e nem é Uno')
        }

modelo = 'Mobi'

if (ano == '2025' && modelo == 'Mobi' || modelo == 'Uno')
        {
            console.log('Veiculo está no pacote promocional')
        }
    else
        {
            console.log('NAO É Veiculo está no pacote promocional')
        }


if (ano == '2025') 
    {
        console.log("ano é 2025")
    } 
else if (ano= '2024')
    {
        console.log("ano é 2024")
    }
else if (ano= '2022')
    {
        console.log("ano é 2023")
    }
else
    {
        console.log('é de outros anos')
    }
    