import { Slot, Row, Board } from "./types";
import { Shape1 } from "./Entities";

class Tetris {
  private board: Board = new Array(10)
    .fill(null)
    .map(() => new Array(10).fill("⬛")) as Board;

  // ejecuta al instanciar
  constructor() {
    const myShape1 = new Shape1();
    this.board = myShape1.draw(this.board);

    setTimeout(() => {
      this.board = myShape1.draw(this.board);
    }, 3000);
  }

  private moveEntities(): void {
    const newBoard: Board = [...this.board];
    for (let rowIndex = newBoard.length - 1; rowIndex >= 0; rowIndex--) {
      const row = newBoard[rowIndex];
      for (let slotIndex = row.length - 1; slotIndex >= 0; slotIndex--) {
        const slot = row[slotIndex];
        if (
          slot === "⬜" &&
          newBoard[rowIndex + 1] &&
          newBoard[rowIndex + 1][slotIndex] === "⬛"
        ) {
          newBoard[rowIndex][slotIndex] = "⬛";
          newBoard[rowIndex + 1][slotIndex] = "⬜";
        }
      }
    }
    this.board = newBoard;
  }

  private printBoard(): void {
    process.stdout.write("+" + "-".repeat(20) + "+\n");
    this.board.forEach((row) => {
      process.stdout.write("|");
      row.forEach((slot) => process.stdout.write(slot));
      process.stdout.write("|\n");
    });
    process.stdout.write("+" + "-".repeat(20) + "+\n");
  }

  public async init(): Promise<void> {
    this.printBoard();
    this.moveEntities();
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    this.init();
  }
}

const game = new Tetris();
game.init();
