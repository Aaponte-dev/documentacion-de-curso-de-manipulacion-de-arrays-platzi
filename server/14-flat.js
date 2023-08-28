const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
const rta = matriz.flat(3);
console.log('for', newArray);
console.log('flat', rta);


const response = [];
function flattenArray(array) {
    if (!Array.isArray(array)) {
        response.push(array);
    } else {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArray(array[i]);
            } else {
                response.push(array[i]);
            }
        }
    }
    return response;
}

console.log(flattenArray([
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
]))