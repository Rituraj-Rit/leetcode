/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let checkRecursively = (
    board,
    word,
    row,
    col,
    rowLen,
    colLen,
    position,
    visited
) => {

    if (position === word.length) return true;

    if (
        row < 0 ||
        col < 0 ||
        row >= rowLen ||
        col >= colLen ||
        board[row][col] !== word[position] ||
        visited[row][col] === 1
    ) {
        return false;
    }

    // Mark visited
    visited[row][col] = 1;

    let isExist = (
        checkRecursively(
            board, word, row + 1, col,
            rowLen, colLen, position + 1, visited
        ) ||

        checkRecursively(
            board, word, row - 1, col,
            rowLen, colLen, position + 1, visited
        ) ||

        checkRecursively(
            board, word, row, col - 1,
            rowLen, colLen, position + 1, visited
        ) ||

        checkRecursively(
            board, word, row, col + 1,
            rowLen, colLen, position + 1, visited
        )
    );

    // Backtracking
    visited[row][col] = 0;

    return isExist;
};

var exist = function(board, word) {

    let visited = board.map(row => row.map(() => 0));

    let rowLen = board.length;
    let colLen = board[0].length;

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {

            if (
                checkRecursively(
                    board,
                    word,
                    row,
                    col,
                    rowLen,
                    colLen,
                    0,
                    visited
                )
            ) {
                return true;
            }
        }
    }

    return false;
};