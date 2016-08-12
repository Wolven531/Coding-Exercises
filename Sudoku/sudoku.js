function Sudoku(vals) {
    this.values = vals || [];
    this.numRows = this.values.length;
    this.numCols = this.values.length > 0 ? this.values[0].length : 0;
    this.rootNum = this.values.length > 0 ? Math.sqrt(this.numRows) : 0;
}

Sudoku.prototype.generateValueMap = function(range, defaultVal) {
    var result = {};
    for(var a = 0; a < range; a++) {
        result[a + 1] = defaultVal;
    }
    return result;
};

Sudoku.prototype.checkBox = function(currBoxRow, currBoxCol) {
    var numsInBox = [];
    for(var a = 0; a < this.rootNum; a++) {
        for(var b = 0; b < this.rootNum; b++) {
            var boxCol = b + this.rootNum * currBoxCol;
            var boxRow = a + this.rootNum * currBoxRow;
            var check = this.values[boxRow][boxCol];
            if(numsInBox.indexOf(check) > -1) {
                return false;
            }
            numsInBox.push(check);
        }
    }
    return true;
};

Sudoku.prototype.validate = function() {
    var colMap = [];
    if(this.values.length < 1) {// empty sudoku is assumed valid
        return true;
    }
    if(this.numRows !== this.numCols) {// sudoku must be a square, so rows MUST equal number of columns
        return false;
    }
    if(this.rootNum % 1 !== 0) {// sudoku needs a square number for its rows for the box check
        return false;
    }
    for(var a = 0; a < this.numCols; a++) {
        colMap.push(this.generateValueMap(this.numCols, false));
        if(this.values[a].length !== this.numCols) {// inconsistent number of columns invalidates the sudoku
            return false;
        }
    }

    for(var a = 0; a < this.values.length; a++) {
        var currRow = this.values[a];
        var rowMap = this.generateValueMap(this.numCols, false);
        for(var b = 0; b < currRow.length; b++) {
            var currVal = currRow[b];
            if(rowMap[currVal]) {// have we run into this value in this row previously?
                return false;
            }
            rowMap[currVal] = true;
            if(colMap[b][currVal]) {// have we run into this value in this col previously?
                return false;
            }
            colMap[b][currVal] = true;
        }
    }
    // box rule
    for(var currBoxRow = 0; currBoxRow < this.rootNum; currBoxRow++) {
        for(var currBoxCol = 0; currBoxCol < this.rootNum; currBoxCol++) {
            var validBox = this.checkBox(currBoxRow, currBoxCol);
            if(!validBox) {
                return false;
            }
        }
    }

    return true;
};

var invalidRow = [// duplicate in first row
    [3, 3, 9, 5, 7, 4, 1, 8, 2],
    [5, 4, 1, 8, 2, 9, 3, 7, 6],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5],
    [2, 7, 4, 3, 5, 1, 6, 9, 8]
];

var invalidCol = [// duplicated in first column
    [6, 3, 9, 5, 7, 4, 1, 8, 2],
    [6, 4, 1, 8, 2, 9, 3, 7, 5],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5],
    [2, 7, 4, 3, 5, 1, 6, 9, 8]
];

var invalidSquare = [// missing final row
    [6, 3, 9, 5, 7, 4, 1, 8, 2],
    [5, 4, 1, 8, 2, 9, 3, 7, 6],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5]
];

var invalidSquare2 = [// missing final column
    [6, 3, 9, 5, 7, 4, 1, 8],
    [5, 4, 1, 8, 2, 9, 3, 7],
    [7, 8, 2, 6, 1, 3, 9, 5],
    [1, 9, 8, 4, 6, 7, 5, 2],
    [3, 6, 5, 9, 8, 2, 4, 1],
    [4, 2, 7, 1, 3, 5, 8, 6],
    [9, 5, 6, 7, 4, 8, 2, 3],
    [8, 1, 3, 2, 9, 6, 7, 4],
    [2, 7, 4, 3, 5, 1, 6, 9]
];

var invalidMissingVal = [// one row is missing a value
    [6, 3, 9, 5, 7, 4, 1, 8, 2],
    [5, 4, 1, 8, 2, 9, 3, 7],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5],
    [2, 7, 4, 3, 5, 1, 6, 9, 8]
];

var invalidBox = [// non-square number of rows / cols
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 1]
];

var invalidBox2 = [// breaks box rule (no duplicates per box)
    [ 1, 2, 3, 4],
    [ 2, 1, 4, 3],
    [ 3, 4, 1, 2],
    [ 4, 3, 2, 1]
];

var valid = [
    [6, 3, 9, 5, 7, 4, 1, 8, 2],
    [5, 4, 1, 8, 2, 9, 3, 7, 6],
    [7, 8, 2, 6, 1, 3, 9, 5, 4],
    [1, 9, 8, 4, 6, 7, 5, 2, 3],
    [3, 6, 5, 9, 8, 2, 4, 1, 7],
    [4, 2, 7, 1, 3, 5, 8, 6, 9],
    [9, 5, 6, 7, 4, 8, 2, 3, 1],
    [8, 1, 3, 2, 9, 6, 7, 4, 5],
    [2, 7, 4, 3, 5, 1, 6, 9, 8]
];

var valid2 = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],
    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],
    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
];

var s0 = new Sudoku();
var s1 = new Sudoku(valid);
var s2 = new Sudoku(valid2);
var s3 = new Sudoku(invalidRow);
var s4 = new Sudoku(invalidCol);
var s5 = new Sudoku(invalidSquare);
var s6 = new Sudoku(invalidSquare2);
var s7 = new Sudoku(invalidMissingVal);
var s8 = new Sudoku(invalidBox);
var s9 = new Sudoku(invalidBox2);

console.log('Empty yields: ' + s0.validate());
console.log('Valid yields: ' + s1.validate());
console.log('Valid (different values) yields: ' + s2.validate());
console.log('Invalid (row) yields: ' + s3.validate());
console.log('Invalid (col) yields: ' + s4.validate());
console.log('Invalid (missing row) yields: ' + s5.validate());
console.log('Invalid (missing col) yields: ' + s6.validate());
console.log('Invalid (missing single value) yields: ' + s7.validate());
console.log('Invalid (non square rows / cols fail) yields: ' + s8.validate());
console.log('Invalid (box rule break) yields: ' + s9.validate());
