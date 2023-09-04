export type CreateTuple<
  T,
  N extends number,
  R extends unknown[] = []
> = R["length"] extends N ? R : CreateTuple<T, N, [...R, T]>;

export type Slot = "⬜" | "⬛";
export type Row = CreateTuple<Slot, 10>;
export type Board = CreateTuple<Row, 10>;
