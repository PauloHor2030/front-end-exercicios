let livro ={
    titulo: 'memórias do escrivao Isias Caminha';
    autor: 'Lima Barreto',
    ano: 1909,
    ISBN: '9878978999',
    // metodo é funcao associada a uma propriedade. Propriedade function abaixo, é uma funcao como metodo
    emprestar:    ()   =>   {
        console.log('Voce pegou emprestado o livro Isaias Caminha')
                            }
}

console.log(typeof livro.emprestar);
livro.emprestar(livro.titulo);