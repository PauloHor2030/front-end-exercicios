/**
 * Conversão de tipos em JavaScript
 */

/**
 * Number
 * 
 * Para converter uma string em um número, podemos utilizar a função
 * Number(). Para isso passamos a string como parâmetro para ela e o valor convertido
 * será retornado.
 */
let numero = Number('4.5');

// Também podemos converter valores que estão
// armazenados em uma variável.
let idade = prompt('Insira sua idade');
let idadeConvertida = Number(idade);

/**
 * parseInt()
 * 
 * Com a função parseInt() podemos converter um número em inteiro, garantindo
 * um dado mais específico.
 */
let inteiro = parseInt('55');

/**
 * parseFloat()
 * 
 * Com a função parseFloat() podemos converter um número em float (que é um
 * número com casas decimais) utilizando a função parseFloat().
 */
let decimal = parseFloat('7.5');

/**
 * NaN
 * 
 * Se eu tentar converter um valor que não é possível ser convertido, o
 * JavaScript retornará o valor especial NaN (Not a Number).
 */
let quantidade = parseInt('Dez itens'); // NaN - não é possível converter essa string em inteiro

/**
 * isNaN
 * 
 * A função isNaN() verifica se um valor é um NaN (Not a Number)
 * Caso o valor seja NaN, ela retorna true, senão, ela retorna false.
 */
let pessoas = parseInt('Mil pessoas'); // NaN

if ( isNaN(pessoas) ) {
	// A condição é verdadeira, pessoas é NaN, o código será executado
}