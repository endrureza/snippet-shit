const findTheMostOftenAppearNumber = (arr) => {
  const obj = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let max = 0;
  let result = 0;
  
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }

  return `${result} appears ${max} times`;
}