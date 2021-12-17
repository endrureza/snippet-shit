const findTotalOccurancesEachCharInAString = (str) => {
    let charMap = {};
    let merge = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        merge += char + charMap[char];
    }
    
    return merge;
}

const findTotalOccurancesEachCharInAStringV2 = (str) => {
    let charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return Object.keys(charMap).filter((res) => charMap[res] > 1).join('');
}

export {
    findTotalOccurancesEachCharInAString,
    findTotalOccurancesEachCharInAStringV2,
}