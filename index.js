// flag to literal
const checkNPosition = (f, nth) => (f >> nth) & 1;

// literal to flag
const getFlag = binary => parseInt(binary, 2);
