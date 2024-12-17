function bubbleSort(array) {
  const n = array.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
        console.log(`Swapped ${array[j + 1]} and ${array[j]}`);
      }
    }

    // If no two elements were swapped in inner loop, then break
    if (!swapped) {
      break;
    }
  }

  return array;
}

// Create an empty array
const numbers = [];

// Get 10 numbers from the user
for (let i = 0; i < 10; i++) {
  const number = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(number);
}

// Sort the array using bubble sort
const sortedNumbers = bubbleSort(numbers);

console.log("Sorted array:", sortedNumbers);
