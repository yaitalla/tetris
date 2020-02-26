const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) => {
        matrix.map(col => col[index])
    })
    if (dir > 0) {
        return rotatedTetro.map(row => row.reverse())
    }
    return rotatedTetro.reverse();
}

module.exports = rotate;