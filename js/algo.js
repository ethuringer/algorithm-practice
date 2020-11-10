const numericArray1 = [215, 523, 531486, 4785, 457, 25, 4];

// 1.
function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
getMinElementFromAnArray(numericArray1);

// 2.
function getMaxElementFromAnArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
getMaxElementFromAnArray(numericArray1);