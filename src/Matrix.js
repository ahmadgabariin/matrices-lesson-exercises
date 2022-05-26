function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    for( let i = 0 ; i < numRows ; i++) {
        matrix.push([])
        for(let j = 0 ; j < numColumns ; j++) {
            matrix[i].push(num++)
        }
    }
    return matrix
}


/* Write your code below */
class Matrix {
    constructor (numRows , numColumns) {
        this.matrix = generateMatrix(numRows , numColumns)
    }

    print () {
        for(let i = 0 ; i< this.matrix.length ; i++) {
            let row = ``
            for(let j = 0 ; j < this.matrix[i].length ; j++) {
                row += this.matrix[i][j] + `\t`
            }
            console.log(row)
        }
        console.log(`\n`)
    }

    get (rowNum , colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter (rowNum ,colNum , value) { this.matrix[rowNum][colNum] = value }

    printColumn (colNum) {
        let row =``
        for(let i = 0 ; i < this.matrix.length ; i++) {
            row += this.matrix[i][colNum] + `\t`
        }
        console.log(row +`\n\n`)
    }
    
    printRow (rowNum) {
        let row =``
        for ( let i = 0 ; i < this.matrix[rowNum].length ; i++) {
            row += this.matrix[rowNum][i] + `\t`
        }
        console.log(row)
    }

    findCoordinate (value) {
        for (let i = 0 ;i < this.matrix.length ; i++) {
            for (let j = 0 ; j < this.matrix[i].length ; j++ ) {
                if(this.matrix[i][j] === value) { 
                    return { row : i , col : j}
                }
            }
        }
        return {x : null , y : null}
    }
}



//You can paste the code from the lesson below to test your solution


let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)
console.log(m.findCoordinate(12))   
console.log(m.findCoordinate(7))


/* Do not remove the exports below */
module.exports = Matrix