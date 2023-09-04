import { CreateTuple, Board } from "./types";

export class Shape1 {
  static readonly size: number = 3;
  readonly shapePositions: CreateTuple<[number, number], 3> = [
    [0, 0],
    [1, 0],
    [1, 1],
  ];
  constructor() {
    const [[_, shapeRowLength]] = this.shapePositions.sort((a, b) => {
      const aSlot = a[1];
      const bSlot = b[1];
      return bSlot - aSlot;
    });
    const slotOffset = Math.floor(Math.random() * (10 - shapeRowLength));
    this.shapePositions = this.shapePositions.map((nArr) => {
      return [nArr[0], nArr[1] + slotOffset];
    }) as CreateTuple<[number, number], 3>;
  }

  public draw(baseBoard: Board): Board {
    const newBoard: Board = [...baseBoard];
    this.shapePositions.forEach((pos) => {
      const [row, slot] = pos;
      newBoard[row][slot] = "⬜";
    });

    return newBoard;
  }
}
