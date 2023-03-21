//iven an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort(arr3) {
    if (arr3.length <= 1) {
      return arr3;
    }
    
    const mid = Math.floor(arr3.length / 2);
    const left = mergeSort(arr3.slice(0, mid));
    const right = mergeSort(arr3.slice(mid));
    
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let ab = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] < right[ab]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return null;
  }
  
  const num = [45, 12, 6, 89, 2, 5];
  const target = 6;
  
  const sortedNum = mergeSort(num);
  const targetIndex = binarySearch(sortedNum, target);
  
  console.log(targetIndex);

//  

// function mergeSort(array){
//     if(array.length <= 1){
//         return array;
//     }
//     let middle = Math.floor(array.length / 2);
//     let leftIndex = array.slice(0, middle);
//     let rightIndex = array.slice(middle);
//     return merge(mergeSort(leftIndex), mergeSort(rightIndex));
//  }
//  function merge(leftIndex, rightIndex){
//     let result = [];
//     while (leftIndex.length && rightIndex.length){
//         if (leftIndex[0]< rightIndex[0]){
//             result.push(leftIndex.shift());
//         }else{
//             result.push(rightIndex.shift());
//         }
//     }
//     return [...result, ...leftIndex, ...rightIndex];
//  }

//  function make(array, target){ // we take two sorted array and mege them
//     let leftIndex = 0;
//     let rightIndex = array.length - 1;
//      console.log("left1",leftIndex);
//      console.log("right1",rightIndex);
    
//     while (leftIndex <= rightIndex){
//          console.log("left2",leftIndex);
//          console.log("right2",rightIndex);// we pick the smaller of the smallest

//         let middle = Math.floor((leftIndex + rightIndex) / 2);
//         if (array[middle]===target){
//             return middle;
//         }else if(array[middle] > target){
//             rightIndex = middle -1;
            
//         }else{
//             leftIndex = middle +1;
//         }
//     }
//     return null;
//  }
 
 
//  let num = [45,12,6,89,2,5];
//  let target = 6
//  console.log(mergeSort(num, target));

 //given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]
function mergeSort(array2){
    if (array2.length <= 1){
        return array2;
    }
    let middle = Math.floor(array2.length / 2);
    let left = array2.slice(0,middle);
    let right = array2.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge( left, right){
    let result = [];
    while (left.length && right.length){
        if(left[0] >= right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return[...result, ...left, ...right];
}
let array2 = [123, 89, 5, 23, 9, 56];
 array2 = mergeSort(array2);
 console.log(array2);

 //Given the following array, search for the following target
//let target = 34
//let arr2 = [1,4,78,2,67,3]
function findTheTarget(array6, target){
    array6 = mergeSort(array6);
    let leftSide = 0;
    let rightSide = array6.length - 1;

    while (leftSide <= rightSide){
        let middle = Math.floor((leftSide + rightSide) / 2);
        if(array6[middle] === target){
            return middle;
        } else if (array6[middle] < target){
            leftSide = middle + 1;

        }else{
            rightSide = middle - 1;
        }
    }
    return null;
}
function mergeSort(array6){
    if (array6.length <= 1){
        return array6;
    }
    let middle = Math.floor(array6.length / 2);
    let leftSide = array6.slice(0, middle);
    let rightSide = array6.slice(middle);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}
function merge(leftSide, rightSide){
    let find = [];
    while(leftSide.length && rightSide.length){
        if(leftSide[0] < rightSide[0]){
            find.push(leftSide.shift());
        }else{
            find.push(rightSide.shift());
        }
    }
    return [...find, ...leftSide, ...rightSide];
}
let targett = 34;
let arr2 = [1, 4, 78, 67, 3];
let  nap = findTheTarget(arr2, targett);
console.log(nap);




