## Context
- Assume we set flags as
```
 has_flags  1 => :show
            2 => :create
            3 => :update
            4 => :delete
```
- The status is `1:false`, `2:true`, `3:false`, `4:true`

## Mapping
> From `left` to `right`

| flags | 4   | 3   | 2   | 1   |
| ----- | --- | --- | --- | --- |
| status    | 1   | 0   | 1   | 0   |
- So the binary number is `1010`.

## Case: from literal to flag
```javascript
const getFlag = binary => parseInt(binary, 2); 
console.log(getFlag('1010')); // result: 10
```
- We got flag as `10`.
## Case: from flag to literal
- We want to check the `4th` position is `true` or `false`
```javascript
const checkNPosition = (f, nth) => (f >> (nth - 1)) & 1;
console.log(checkNPosition(10,4)) // result: 1
```
- We got the status as `true`.



## Reference
[Binary to Decimal in Node.js](https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal)
[Bit Fields: How it stores the values](https://github.com/pboling/flag_shih_tzu#bit-fields-how-it-stores-the-values)
[Extracting bits from flag words](https://en.wikipedia.org/wiki/Bit_field#Extracting_bits_from_flag_words)