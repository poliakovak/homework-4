//Напишите код, который определяет сумму и произведение значений массива.
let array = [1,2,3,4];
let sum = array.reduce(function(a,b){
    return a + b;
});
let composition = array.reduce(function(a,b){
    return a * b;
});