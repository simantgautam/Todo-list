import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";
const PAGE_SIZE = 10;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(
          `${API_ENDPOINT}?_page=${currentPage}&_limit=${PAGE_SIZE}`
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return (
    <div>
      <h1>TODO App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        totalItems={100}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default TodoList;
