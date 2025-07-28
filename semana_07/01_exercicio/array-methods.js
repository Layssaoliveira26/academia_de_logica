//1.Função Tradicional
function sum(a, b) {
    return a + b;
}

//2.Arrow function 
const multiply = (a, b) => a * b;

//3.Função com rest parameters
function calculateAverage(...numbers) {
    if(numbers.length === 0) return 0;

    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;

}

//4.Usando spread operator com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

//5.Usando spread com objetos 
const person = { name: "Maria", age: 5 };
const employee = { ...person, id: 1001, department: "Engenharia" };


//Testando as funções
console.log("Soma:", sum(1,2));
console.log("Multiplicação", multiply(2, 5))
console.log("Média de 3 números:", calculateAverage(1, 2, 3))
console.log("Média de 5 números:", calculateAverage(1, 2, 3, 4, 5))
console.log("Frutas combinadas:", allFruits)
console.log("Objeto funcionário:", employee)