function getLastValue(array) {
    let lastIndex = array.length -1;
    return array.lastIndex;
    
  }
  /*
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
   
  
