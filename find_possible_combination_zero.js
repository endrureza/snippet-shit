const findPossibleCombinationResultingZero = (arr) => {
  const result = [];
  let tempArr;

  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        if (arr[i] > arr[j]) {
          tempArr = [arr[i], arr[j]];
        } else {
          tempArr = [arr[j], arr[i]];
        }
        result.push(JSON.stringify(tempArr));
      }
    }
  }

  return result
    .filter((item, index) => result.indexOf(item) === index)
    .map((item) => JSON.parse(item));
};

export { findPossibleCombinationResultingZero };
