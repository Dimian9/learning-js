
  /*

  function getLastValue(array) {
    let lastIndex = array.length -1;
    return array.lastIndex;
    
  }
  function arraySwap(array) {
    const lastIndex = array.length -1;
    const lastValue = array[lastIndex]
    const firstValue = array[0];
    
          array[0] = lastValue;
          array[lastIndex] = firstValue;
  
          return array;
  
  }
  
        console.log(arraySwap([1, 20, 22, 24, 5]));
  
        console.log(arraySwap(['hi', 'hello', 'hey']));
  
  for (let i=0; i>=10; i+2) {
    console.log(i)
  }
  
  
  for (let i=5; i<=0; i--) {
    console.log(i);
  
  }
  let i = 0;
  
  while (i>=10) {
    console.log(i);
    i+2
  }
  
  const array = [];
  const result = [];
   
  function addOne(array) {
    const result = [];
    for (let i=0; i < array.length; i++) {
     result.push(array[i] + 1);
    }
    return result
  }
  
  console.log(addOne([1, 2, 3]));
        console.log(addOne([-2, -1, 0, 99]));
  
  function addNum(array, num) {
    const total = [];
    for (let i = 0; i < array.length; i + num) {
      total.push(array[i] + num);
    }
      return total;
  }
  
    addNum([1, 2, 3], 2);
  
  
  function addArrays(array1, array2) {
          const result = [];
  
          for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i]);
          }
  
          return result;
        }
  
    console.log(addArrays([1, 1, 2], [1, 1, 3]));
  
  function countPositive(nums) {
    let result = 0;
   
   for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
              result++;
            }
          }
    return result
    }
  */
  
  /*
  function minMax(nums) {
    const result = {
      min: nums[0],
      max: nums[0]
    };

    for (let i = 0; i < nums.length; i++) {
      const value = nums[i]
      if (!nums) {
        result = null;
      }

      if (value < result.min) {
        result.min = value;
      }
      if (value > result.max) {
        result.max = value;
      }
    }
    return result;
  }

  function countWords(words) {
    const objectResult = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (!objectResult[word]) {
        objectResult[word] = 1;
      } else {
        objectResult[word] ++;
      }
    }
    return objectResult;
  }
   */
  
  let words = ['hello', 'world', 'search', 'good'];
  let index = -1;

  for (let i = 0; i < words.length; i++) {
   
    if (words[i] === 'search') {
      index = i;
      break
    }
  }
  console.log(words[i])

  words = ['not', 'found']
  
  index = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
      index = i;
    }
  }
  console.log(index);


  function findIndex(array, word) {
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        return i;
      }
    }
    return -1;
  }

//remove eggs from an array 
  function removeEgg(foods) {
    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < foods.length; i++) {
      if (foods[i] === 'egg' && eggsRemoved < 2) {
        eggsRemoved++;
        continue;
      }
      result.push(foods[i]);

    }
    return result;
  }

  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

//reverse() - method modifies the original array
  function removeEgg(foods) {
    const reversedFoods = foods.reverse();

    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < reversedFoods.length; i++) {
      if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
        eggsRemoved++;
        continue;
      }
      result.push(reversedFoods[i]);

    }
    return result.reverse();
  }

//slice() - method creates copy of an array
  function removeEgg(foods) {
    const foodsCopy = foods.slice();
    const reversedFoods = foodsCopy.reverse();

    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < reversedFoods.length; i++) {
      if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
        eggsRemoved++;
        continue;
      }
      result.push(reversedFoods[i]);

    }
    return result.reverse();
  }

  console.log(removeEgg(foods));
  console.log(foods);

// FizzBuzz PROBLEM

for (let i = 0; i < 20; i++) {
    // The trick to this problem is to check if
    // the number is divisible by 3 and 5 first.
    // Otherwise, it will always display 'Fizz'.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')

  } else if (i % 3 === 0) {
    console.log('Fizz')

  } else if (i % 5 === 0) {
    console.log('Buzz')

  } else {
    console.log(i)
  }

}

// check if a string/word exists in an array
function findIndex(array, word) {
    
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word)
    }
  }
  return result; 
}

