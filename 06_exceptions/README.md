# Exercise: Exceptions

For this exercise, your task is to implement a `Board` class for a very
simple board game, similar to Go or Checkers. Here are the requirements:

- The board's size (its width and height) is set when creating the
  board, and cannot be changed after.
- We can add a piece to the board. To do so, we must provide the piece's
  coordinates (x, y). Pieces cannot be placed outside the board, and no
  two pieces can be in the same position at the same time.
- We can remove a piece from the board by providing its coordinates.
  Obviously, if there is no piece at the given coordinates, we cannot
  remove it.
- We can move a piece by providing its original position as well as its
  destination. Moving a piece is the same as removing it from its
  original position, then adding it at its destination.

Create the following exception classes to handle invalid values:
`OutOfBoundsError`, `PositionOccupiedError`, and `NoPieceError`. To test
your error handling logic, call the method for moving a piece and use
`console.log` to display a different error message to the user for each
possible exception.
