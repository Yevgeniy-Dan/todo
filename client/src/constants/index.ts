export const API_URL = process.env.NEXT_PUBLIC_API_URL; // just /api/todos on the prod

export const priorityTable: {
  [key: number]: string;
} = {
  1: "red",
  2: "orange",
  3: "yellow",
  4: "green",
  5: "blue",
  6: "indigo",
  7: "violet",
  8: "purple",
  9: "pink",
  10: "teal",
};
