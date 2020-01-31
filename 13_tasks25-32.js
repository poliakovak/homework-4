//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr = ['a','b','c'];
arr.push(1,2,3);
console.log(arr);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr2  = [1,2,3];
arr2.reverse();
console.log(arr2);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr3 = [1,2,3];
arr3.unshift(4,5,6);
console.log(arr3);

//Дан массив ['js', 'css', 'jq']. Выведите на кран последний элемент.
let arr4 = ['js','css','jq'];
console.log(arr4[arr4.length-1]);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arr5 = [1,2,3,4,5];
let result = arr5.slice(3);
console.log(result);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let arr6 = [1,2,3,4,5];
arr6.splice(1,2);
console.log(arr6);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let arr7 = [1,2,3,4,5];
let newArr = arr7.splice(1,3);
console.log(newArr);

//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr8 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr8[1][0]);