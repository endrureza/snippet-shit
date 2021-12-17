const toSnakeCase = (str) => {
    let snake = '';
    let merge = '';

    for (let char of str) {
        if (char === ' ') {
            snake += '_';
        } else {
            snake += char.toLowerCase();
        }
    }

    for (let char of snake) {
        if (char === '_') {
            merge += char;
        } else {
            merge += char;
        }
    }

    return merge;
}

export {
    toSnakeCase,
}