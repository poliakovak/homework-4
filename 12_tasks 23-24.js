/*Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми
числами, где каждое число больше предыдущего на единицу.
 */
function generateArray(start,len){
    let result = [];
    for(let i = 0, j = start; i < len; i++, j++){
        result[i] = j;
    }
    return result;
}
/*Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию 
currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет
находиться сумма элементов массива numbers до этой позиции включительно.
 */
function currentSum(numbers){
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        let tmp = numbers.slice(0,i+1);
        result[i] = tmp.reduce(function(accumulator,currentValue){
            return accumulator + currentValue;
        });
    }
    return result;
}