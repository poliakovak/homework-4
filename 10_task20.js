/*Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined,
0, –0, NaN и "" (пустя строка).
 */
function getRight(value) {
    if (value !== false && value !== null && value !== undefined && value !== 0 && value !== -0 && value !== NaN && value !== "") {
        return value;
    }
}
function filterFalse(arr){
    return arr.filter(getRight);
}