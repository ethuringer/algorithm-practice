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

const numericArray1 = [215, 523, 531486, 4785, 457, 25, 4];


function getThirdMaxElementOfAnArray(numericArray1) {
    let max = numericArray1[0];
    let max2 = numericArray1[0];
    for (let i = 0; i < numericArray1.length; i += 1) {
        if (numericArray1[i] > max) {
            max2 = max
            max = numericArray1[i];
        }
        else {
            (numericArray1[i] > max2 && numericArray1[i] != max)
            max2 = numericArray1[i];
        }
    }

    console.log(max2);
}
getThirdMaxElementOfAnArray(numericArray1);

