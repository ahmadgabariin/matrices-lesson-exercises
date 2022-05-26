const Matrix = require(`./Matrix`)

class TicTacToe extends Matrix {
    
    constructor () {
        super(0,0)
        this.played = 0
    }

    loadBoard () {
        let matrix = []
        for (let i = 0 ; i < 3 ; i++) {
            matrix.push([])
            for (let j = 0 ; j < 3 ; j++) {
                matrix[i].push(`.`)
            }
        }

        this.matrix = matrix
    }

    checkPlayer = player => {
        return player === this.played
    }

    play (rowNum , columnNum , player) {
        if (! this.checkPlayer(player)) {
            let firstPlayer = 1
            if ( this.matrix[rowNum][columnNum] === `.`) {
                player === firstPlayer ? this.alter(rowNum, columnNum, `X`) : this.alter(rowNum, columnNum , `O`)
                this.played = player
                this.checkWinner(player)
            } else { console.log(`already been played at this postion`) }
        } else {
            console.log(`Not your turn !`)
        }
    }

    checkWinner  = player  => {
        const columnNum = 3

        const printWinner = () => {
            console.log(`Congratulations Player ${player}`)
            setTimeout( () => {
                this.loadBoard()
                this.print()
            } , 2000)
        }

        for (let i = 0 ; i < this.matrix.length ; i++) {
            let oCounter = 0
            let xCounter = 0
            for (let j = 0 ; j < this.matrix[i].length ; j++) {
                this.matrix[j][i] === `O` ? oCounter++ : this.matrix[j][i] === 'X' ? xCounter++ : ``
            }
            xCounter === columnNum || oCounter === columnNum ? printWinner() : ``
            
        }


    }
}

// let board = new TicTacToe()
// board.loadBoard()
// board.print()
//prints
// .       .       .
// .       .       .
// .       .       .
// let board = new TicTacToe()
// board.loadBoard()

// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
//prints 
// o       .       .
// .       .       .
// .       .       x


let board = new TicTacToe()
board.loadBoard()
    
board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(0, 2, 1) // already been played
board.play(1, 0, 2)
// board.play(1, 2, 1) //prints Congratulations Player 1
board.play(1, 1, 1) 
board.play(2, 0, 2) //prints Congratulations Player 2

    
board.print()
//prints

// o       .       x
// o       .       x
// .       .       x