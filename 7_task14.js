/*Сумма элементов двух массивов Напишите код, который создаёт массив элементов представляющих собой сумму
соответствующих элементов заданных массивов.
 */
let firstArray = [1,2,3,4];
let secondArray = [4,3,2,1,6,78,1];
let result = [];
for(let i = 0; i < firstArray.length; i++){
    if(firstArray[i] === undefined || secondArray[i] === undefined){
        break;
    }
    result.push(firstArray[i]+secondArray[i]);
}