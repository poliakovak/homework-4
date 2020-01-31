/*Объединить два массива без дублирования элементов Напишите функцию union, которая возвращает массив состоящий только
 из уникальных элементов из каждого массива.
 */
function getUnion(arr1,arr2){
    let tmp = arr1.concat(arr2);
    let result = [];
    for(let i = 0; i < tmp.length; i++){
        if(result.indexOf(tmp[i]) === -1){
            result.push(tmp[i]);
        }
    }
    return result;
}
/*Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2
и наоборот.
 */
function getDifference(arr1,arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        let flag = true;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                flag = false;
                break;
            }
        }
        if(flag === true){
            result.push(arr1[i]);
        }
    }
    return result;
}
/*Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их
значений.
 */
function compareNumbers(arr){
    return arr.sort(function(a,b){return b - a;});
}
//Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
function GetSumOfSquares(arr){
    let squares = arr.map(function(element){return element**2});
    return squares.reduce(function(a, b) {
        return a + b;
    });
}