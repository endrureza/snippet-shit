const isPalindrome = (num) => {
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return str === rev;
}

export default isPalindrome