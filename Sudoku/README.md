# Soduku

## Challenge 1:
- The function signature: validate(sudoku)
- Given an array of arrays (example below) that represents a sudoku, determine whether or not the sudoku is valid.
  - Each row horizontally must contain no duplicates
  - Each column vertically must contain no duplicates
  - Each box must contain no duplicates

## Challenge 2:
- The function signature: generate()
- Create a function that will generate a valid sudoku representation. The same validation rules apply as above.

## Examples:

Example sudoku (valid): validate(sudoku) === true
```javascript
[6, 3, 9, 5, 7, 4, 1, 8, 2],
[5, 4, 1, 8, 2, 9, 3, 7, 6],
[7, 8, 2, 6, 1, 3, 9, 5, 4],
[1, 9, 8, 4, 6, 7, 5, 2, 3],
[3, 6, 5, 9, 8, 2, 4, 1, 7],
[4, 2, 7, 1, 3, 5, 8, 6, 9],
[9, 5, 6, 7, 4, 8, 2, 3, 1],
[8, 1, 3, 2, 9, 6, 7, 4, 5],
[2, 7, 4, 3, 5, 1, 6, 9, 8]
```

Example sudoku (invalid): validate(sudoku) === false

```javascript
[3, 3, 9, 5, 7, 4, 1, 8, 2],
[5, 4, 1, 8, 2, 9, 3, 7, 6],
[7, 8, 2, 6, 1, 3, 9, 5, 4],
[1, 9, 8, 4, 6, 7, 5, 2, 3],
[3, 6, 5, 9, 8, 2, 4, 1, 7],
[4, 2, 7, 1, 3, 5, 8, 6, 9],
[9, 5, 6, 7, 4, 8, 2, 3, 1],
[8, 1, 3, 2, 9, 6, 7, 4, 5],
[2, 7, 4, 3, 5, 1, 6, 9, 8]
```
