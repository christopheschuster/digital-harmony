/*
Filename: Advanced_Sorting_Algorithm.js

Description: This code implements a complex and efficient sorting algorithm called QuickSort. It takes an array of numbers as input and sorts them in ascending order using the QuickSort algorithm. The code is divided into multiple functions, each with a specific purpose, to improve readability and maintainability.

Note: This implementation assumes a basic understanding of the QuickSort algorithm and does not include implementation of edge cases or handling of non-numeric inputs.

*/

// Function to swap two elements in the array
function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

// Function to partition the array and return the pivot index
function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

// Function to implement the QuickSort algorithm
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    const pivotIndex = partition(arr, left, right);

    if (left < pivotIndex - 1) {
      quickSort(arr, left, pivotIndex - 1);
    }
    if (right > pivotIndex) {
      quickSort(arr, pivotIndex, right);
    }
  }

  return arr;
}

// Example usage
const numbers = [9, 4, 2, 7, 5, 1, 8, 3, 6];
console.log('Unsorted Array:', numbers);

const sortedArray = quickSort(numbers);
console.log('Sorted Array:', sortedArray);

// Output:
// Unsorted Array: [9, 4, 2, 7, 5, 1, 8, 3, 6]
// Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Additional complex functionality or edge cases can be added as desired beyond this point...