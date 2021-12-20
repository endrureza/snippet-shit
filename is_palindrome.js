const isPalindrome = (str) => {
  let rev = str.split("").reverse().join("");
  return str === rev;
};

const isPalindromeV2 = (str) => {
  const splittedWord = str.split("");
  const wordLength = splittedWord.length;
  let i = 0;
  let j = wordLength - 1;

  while (i < j) {
    if (splittedWord[i] !== splittedWord[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

export { isPalindrome, isPalindromeV2 };
