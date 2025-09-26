// 0-1 hora por dia = verde
// 1-3 amarelo
// 3   vermelho


let usoDiasDaSemana = [1,2,2.4,5,1.2,0.5,12]; // domingo para sabado
let diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça  ",
    "Quarta ",
    "Quinta ",
    "Sexta  ",
    "Sabado "
];


// determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if (numeroDeHoras <= 1)
        {
            return '🟢';
        }
    else if (numeroDeHoras <=3)
        {
            return '🟡';
        }
    else
        {
            return '🟠';
        }
}

m_iteracoes = usoDiasDaSemana.length;


console.log('Domingo:          ' + indicadorDeUso(usoDiasDaSemana[0]));
console.log('Segunda-Feira     ' + indicadorDeUso(usoDiasDaSemana[1]));
console.log('Terça-Feira       ' + indicadorDeUso(usoDiasDaSemana[2]));
console.log('Quarta-Feira      ' + indicadorDeUso(usoDiasDaSemana[3]));
console.log('Quinta-Feira      ' + indicadorDeUso(usoDiasDaSemana[4]));
console.log('Sexta-Feira       ' + indicadorDeUso(usoDiasDaSemana[5]));
console.log('Sabado            ' + indicadorDeUso(usoDiasDaSemana[6]));
let m_total_horas = 0;
let m_total_vezes = 0;

for (let contador = 0; contador <=6; contador++ )
    {
        m_total_horas = m_total_horas + usoDiasDaSemana[contador];
        m_total_vezes = m_total_vezes + 1;
        if (m_total_vezes >0)
            {
                m_media       = m_total_horas / m_total_vezes;
            }
        else
            {
                m_media = 0;
            }
        let m_farol     = indicadorDeUso(usoDiasDaSemana[contador]);
        let m_diaSemana = diasDaSemana[contador];
        let m_horas     = usoDiasDaSemana[contador];
        // console.log(m_farol + m_diaSemana + m_horas + 'horas de uso de computador');
        let mensage = (m_horas > 1) ? "horas de uso" : "hora de uso"; // operador ternario 
        console.log(`${m_farol} 🗓️ ${ m_diaSemana } | ${ m_horas.toFixed(2) } ${mensage} com uma média horária de ${m_media.toFixed(2)}`);
    }


// console.log(typeof usoDiasDaSemana); // object, tudo em js é um objeto
// console.log(typeof usoDiasDaSemana[0]); // number
// console.log(typeof indicadorDeUso); // function



