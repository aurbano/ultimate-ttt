import {Coord} from "./constants";
abstract class TTT<CellType> {
    /**
     * Holds the state of the game board as a two dimensional array
     * each element of the inner array is a SubBoard
     */
    public board: Array<Array<CellType>>;
    /**
     * Holds the coordinates of the board that should be played next
     * If the last move sends you to a finished board, then this will be null
     * and you may choose any.
     */
    public nextBoard: Coord;
    /**
     * Game winner, will be -1 if no one has won yet, 0 or 1.
     */
    public winner: number;
    /**
     * Indicates the size of Ultimate TTT we're dealing with
     * typically this will be 3 for a 3x3 board.
     */
    protected size: number;
    /**
     * Holds the maximum number of moves before the board is full
     * this is here to avoid recalculating it every time its needed
     */
    protected maxMoves: number;
    /**
     * Counter of moves that have been played so far
     */
    protected moves: number;

    /**
     * Returns true if the game is over
     */
    public abstract isFinished(): boolean;

    /**
     * Returns the winner for the game, throws an exception if the game hasn't finished yet.
     * @returns {number} -1 for a tie, 0 you won, 1 opponent won
     */
    public abstract getResult(): number;

    /**
     * Returns a string with the board formatted for display
     * including new lines.
     * @returns {string} Printable version of the game board
     */
    public abstract prettyPrint(): string;

    /**
     * Getter for moves
     * @returns {number}
     */
    public getMoves(): number {
        return this.moves;
    }

    /**
     * Check if the board is full
     * @returns {boolean}
     * @private
     */
    public isFull(): boolean {
        return this.moves === this.maxMoves;
    }

    /**
     * Return a new UTTT board as a copy of this one
     * @returns {UTTT} Copy of the current game
     * @private
     */
    public abstract copy(): TTT<CellType>;
}

export default TTT;