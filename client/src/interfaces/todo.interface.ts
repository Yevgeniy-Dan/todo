export interface ITodoCard {
  _id?: string;
  title: string;
  status?: "Done" | "Undone";
  priority: number;
}
