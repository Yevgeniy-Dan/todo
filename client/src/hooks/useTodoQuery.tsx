import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "@/constants";

const useTodoQuery = <T,>({ path = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}/${path}`);

        const data = await response.data;

        setData(data);
      } catch (error) {
        console.error("Error fetching todos: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, [path]);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useTodoQuery;
