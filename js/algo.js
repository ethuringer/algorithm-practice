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

console.log('Hello');



