/*Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то
на выход должно быть 5:563:921:7.
 */
let number = Math.round(prompt("Enter number"));
if(typeof(number) !== Number){
    alert("It\'s not a number");
}
function colonOdd(num){
    let arrayOfNum = [];
    while(num > 0){
        let newNumber = num%10;
        arrayOfNum.push(newNumber);
        num = (num - newNumber)/10;
    }
    arrayOfNum.reverse();
    let result = ""+arrayOfNum[0];
    for(let i = 0; i < arrayOfNum.length-1; i++){
        if(arrayOfNum[i]%2 !== 0 && arrayOfNum[i+1]%2 !== 0){
            result += ":"+arrayOfNum[i+1];
        }
        else{
            result += arrayOfNum[i+1];
        }
    }
    return(result);
}

alert(colonOdd(number));

/*Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива
 arr (игнорируйте чувствительность к регистру).
 */
function removeDuplicates(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result;
}
//Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые n элементов массива.
function getFirst(array, n){
    return array.slice(0,n);
}