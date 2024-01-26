import { ITodoCard } from "@/interfaces/todo.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL; // just /api/todos on the prod

export type HttpMethod = "put" | "delete" | "post";

const getTodos = async (): Promise<ITodoCard[]> => {
  const response = await axios.get(`${API_URL}`);

  return response.data;
};

const addTodo = async (todo: ITodoCard): Promise<ITodoCard> => {
  return axios.post(`${API_URL}`, todo);
};

const updateTodo = async (todo: ITodoCard): Promise<ITodoCard> => {
  return axios.put(`${API_URL}/${todo._id}`, todo);
};

const removeTodo = async (todo: ITodoCard): Promise<ITodoCard> => {
  return axios.delete(`${API_URL}/${todo._id}`);
};

const useTodoQuery = <T,>() => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

const useTodoMutation = <T,>() => {
  return useMutation({
    mutationFn: (data: { method: HttpMethod; todo: ITodoCard }) => {
      const { method, todo } = data;
      switch (method) {
        case "post":
          return addTodo(todo);
        case "put":
          return updateTodo(todo);
        case "delete":
          return removeTodo(todo);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  });
};

export { useTodoQuery, useTodoMutation };
