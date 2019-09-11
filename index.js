// flag to literal
const checkNPosition = (f, nth) => (f >> (nth - 1)) & 1;
console.log(checkNPosition(10, 4));

// literal to flag
const getFlag = binary => parseInt(binary, 2);
console.log(getFlag('1010'));
