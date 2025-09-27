// Selecionando elementos por ID
//     - Utilizando `document.getElementById()`, selecione a `<div>` que contém o livro "O Cortiço" e armazene sua referência em uma variável
//     - Dê saída à variável anterior no console do navegador, observe o que é exibido


m_saida1 = document.getElementById('o-cortico');
console.log(m_saida1); 


// 2. Selecionando elementos por Tag
// Utilizando `document.getElementsByTagName()`, selecione todos os elementos `<a>` da página , armezene seu retorno em uma variável
// Dê saída à variável anterior no console do navegador, observe o que é exibido


m_saida2 = document.getElementsByTagName('<a>');
console.log(m_saida2); 


// 3. Selecionando elementos com Query
// Utilizando `document.querySelector()`, selecione o elemento que possui o ID `vidas-secas`, armezene sua referência em uma variável

m_saida3 = document.querySelector('vidas-secas');
console.log(m_saida3); 
