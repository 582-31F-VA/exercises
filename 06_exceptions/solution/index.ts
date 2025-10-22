class OutOfBoundsError extends Error {}
class PositionOccupiedError extends Error {}
class NoPieceError extends Error {}

class Piece {
    #x: number;
    #y: number;

    constructor(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }

    get x(): number {
        return this.#x;
    }

    get y(): number {
        return this.#y;
    }
}

class Board {
    #width: number;
    #height: number;
    #pieces: Array<Piece>;

    constructor(width: number, height: number) {
        this.#width = width;
        this.#height = height;
        this.#pieces = [];
    }

    #isOccupied(x: number, y: number): boolean {
        return this.#pieces.some(piece => piece.x === x && piece.y == y);
    }

    addPiece(x: number, y: number): Board {
        const isOutside = x < 0 || x > this.#width || y < 0 || y > this.#height;
        if (isOutside) {
            throw new OutOfBoundsError(
                `outside board (width: ${this.#width}, height: ${this.#height})`,
            );
        }

        if (this.#isOccupied(x, y)) {
            throw new PositionOccupiedError(
                `already a piece at (${x}, ${y})`,
            );
        }

        this.#pieces.push(new Piece(x, y));

        return this;
    }

    removePiece(x: number, y: number): Board {
        if (!this.#isOccupied(x, y)) {
            throw new NoPieceError(
                `no piece at (${x}, ${y})`,
            );
        }
        this.#pieces = this.#pieces.filter(piece =>
            !(piece.x === x && piece.y == y)
        );
        return this;
    }

    movePiece(
        originX: number,
        originY: number,
        destX: number,
        destY: number,
    ): Board {
        this.removePiece(originX, originY);
        this.addPiece(destX, destY);
        return this;
    }
}

const board = new Board(2, 2);

try {
    board.movePiece(1, 1, 2, 3);
} catch (error) {
    if (error instanceof OutOfBoundsError) {
        console.log("Out of bounds"); // user-facing error
    }
    if (error instanceof PositionOccupiedError) {
        console.log("Position occupied");
    }
    if (error instanceof NoPieceError) {
        console.log("No piece");
    }
}
