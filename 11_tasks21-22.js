//Переместить элемент массива из одной позиции в другую.
let array = [1,2,3,4];
let tmp = array[0];
array[0] = array[3];
array[3] = tmp;
//Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.
function moveElement(arr,from,to) {
    if (Math.max(from,to) >= arr.length || Math.min(from,to) < 0) {
        return null;
    }
    else{
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    }
}