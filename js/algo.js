'use strict';



// 1.
/* function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
getMinElementFromAnArray(numericArray1); */

// 2.
/* function getMaxElementFromAnArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
getMaxElementFromAnArray(numericArray1);
 */

// 3.
/* function getAverageOfArray(numericArray1) {
    let sum = 0;
    for (let i = 0; i < numericArray1.length; i += 1) {
        sum += numericArray1[i];
        
    }
    console.log(sum / numericArray1.length);
}
getAverageOfArray(numericArray1); */

// 4.
/* function getSum(numericArray1) {
    let sum = 0;
    for (let i = 0; i < numericArray1.length; i += 1) {
        sum += numericArray1[i];
    }
    console.log(sum);
}
getSum(numericArray1);
 */

// 5.
/* function getEvenNumbers(numericArray1) {
   let even = 0;
for (let i = 0; i < numericArray1.length; i += 1) {
   if (numericArray1[i] % 2 == 0) {
       even++;
   }
}
console.log(even);
}
getEvenNumbers(numericArray1); */

// 6.

/*  const numericArray1 = [999999,215, 523, 531486, 4785, 457, 25, 4];


 function getSecondMinElementOfAnArray(numericArray1) {
    let min = numericArray1[0];
    let min2 = numericArray1[0];
     for (let i = 0; i < numericArray1.length; i += 1)
     {
        if (numericArray1[i] < min) {
        min2 = min
        min = numericArray1[i];
        } 
        else   {
        (numericArray1[i] < min2 && numericArray1[i] != min)
        min2 = numericArray1[i]
        }
    }

    console.log(min2);
 }
 getSecondMinElementOfAnArray(numericArray1); */


// 7.

/* const numericArray1 = [215, 523, 531486, 4785, 457, 25, 4];


function getThirdMaxElementOfAnArray(numericArray1) {
    let max = numericArray1[0];
    let max2 = numericArray1[0];
    let max3 = numericArray1[0];
    for (let i = 0; i < numericArray1.length; i += 1) {
        if (numericArray1[i] > max) {
            max2 = max
            max = numericArray1[i];
        }
        else if
            (numericArray1[i] > max2 && numericArray1[i] != max) {
            max3 = max2
            max2 = numericArray1[i];
        }
        else if
            (numericArray1[i] > max3 && numericArray1[i] != max2) {
            max3 = numericArray1[i];
        }

    }

    console.log(max3);
}
getThirdMaxElementOfAnArray(numericArray1); */

// 8.
/* const numericArray1 = [215, 523, 'számok', 531486, 4785, 457, 25, 4];

function containsParameter(numericArray1) {
    let contains = false;
    for (let i = 0; i < numericArray1.length && contains == false; i += 1)
    if (numericArray1[i] == 23) {
        contains = true;
    }
    console.log(contains);
}
containsParameter(numericArray1); */

// 9.


/* function binarySearch(numericArray1, search) {
    let start = 0;
    let end = numericArray1.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
    
    if (numericArray1[middle] === search) {
        return true
    } 
    else if (numericArray1[middle] < search) 
        start = middle + 1;
    else 
        end = middle - 1;
        counter += 1;
    } 
        return false;

}

const numericArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(binarySearch(numericArray1, 6)); */

// 10.

/* const mixArray = [15, 247, 654, 23, 'cat', 47, 599, 23, 623, 45, 68];

function containsParameterDb(mixArray) {
    let db = 0;
    for (let i = 0; i < mixArray.length; i += 1) {
        if (mixArray[i] === 23) {
            db++;
        } 
    }
    console.log(db);
}
containsParameterDb(mixArray); */

// 11.

/* const numericArray2 = [1.145, 58.456, 87.145, 4521.45782, 457.14];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSort(numericArray2)); */

// 12.

/* const mixArray3 = [1.145, 14, 3, 'cat', 7851, true, 7412, 'dog', 7.7842];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] > arr[i + 1] ) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
            else if (typeof arr[i] != 'number' && typeof arr[i+1] === 'number') {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSort(mixArray3)); */

// 14.

/* const mixedArray = [454, 365, 'cat', 21, 'dog', 'elephant'];

function selectNumbers(arr) {
    let numbers = [];
    let strings = [];
    let sortedArray =[];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        } else {
            strings.push(arr[i]);
        }
    }
    for (let i = 0; i < numbers.length; i += 1) {
        sortedArray.push(numbers[i]);
        sortedArray.push(strings[i]);
        
    }
    console.log(sortedArray)
}
selectNumbers(mixedArray);
 */

// 15.

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function selectNumbers(arr) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
} else {
    oddArray.push(arr[i]);
}
}
console.log('Páros számok : ' + evenArray);

console.log('Páratlan számok : ' + oddArray);
}

selectNumbers(arr); */

// 16.




/* function segment(arr1, arr2) {
    const arrSegment = [];
for (let i = 0; i < arr1.length; i += 1) 
    for (let j = 0; j < arr2.length; j += 1) {
        if (arr1[i] === arr2[j]) {
            arrSegment.push(arr1[i]);
        }
    }
console.log(arrSegment);

}
segment(numbers1, numbers2); */


/* function union(arr1, arr2) {
    let unionArr = [];
    for (let i = 0; i < arr1.length; i += 1)
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
            }
        }
    unionArr = arr1.concat(arr2);
    console.log(unionArr);

}
union(numbers1, numbers2);
 */


/* function difference(arr1, arr2) {
    for (let i = 0; i < arr1.length; i += 1)
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
            }
        }
    console.log(arr1);
    console.log(arr2);
}
difference(numbers1, numbers2); */


const numbers1 = [125, 457, 45, 356, 36, 47, 85, 84];
const numbers2 = [47, 656, 68, 74, 647, 356, 784, 89];

function descartes(arr1, arr2) {
    let arrDesc=[];
    for (let i = 0; i < arr1.length; i += 1)
    for (let j = 0; j < arr2.length; j += 1) {
        arrDesc.push([].concat(arr1[i],arr2[j]))
        }
    
console.log(arrDesc);
}
descartes(numbers1, numbers2);
