function binarySearch(numericArray1, search) {
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

console.log(binarySearch(numericArray1, 6));