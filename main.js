
/* start: blocco 1 */
/* let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

if (num1 > num2){
    console.log(num1)
} else if(num1 < num2){
    console.log(num2)
} else if (num1 == num2){
    console.log('same numbers')
} */
/* end: blocco 1 */

/* start: blocco 2 */
/* let word1 = prompt("Enter first word", "Hello")
let word2 = prompt("Enter second word", "World")

if (word1.length > word2.length){
    console.log(word2, word1)
} else if (word1.length > word2.length){
    console.log(word1, word2)
} else if (word1.length == word2.length){
    console.log('same length')
} */
/* end: blocco 2 */

/* start: blocco 3 */
/* var arr = [];
for (i=0; i <= 4; i++){
    let num = parseFloat(prompt("Enter a number", "1"));
    arr.push(num);
}

let result = arr.reduce((a, b) => {
    return a + b;
}, 0);

console.log(result) */
/* end: blocco 3 */

/* start: blocco 4 */
var arr = [];
for (i=0; i <= 5; i++){
    let num = parseFloat(prompt("Enter a number", "1"));
    if (num % 2 == 0){

    }else{
        arr.push(num);
    }
}
console.log(arr)
/* end: blocco 4 */
