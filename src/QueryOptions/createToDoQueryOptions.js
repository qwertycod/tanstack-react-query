import {queryOptions, mutationOptions } from '@tanstack/react-query'

export default function createToDoQueryOptions(id){
    return queryOptions({
        queryKey: ['todos'],
        queryFn: getTodos,
    });
}

export function createTodoMutationOptions() {
       return mutationOptions({
            mutationFn: postTodo,
        });
}

const postTodo = async (newTodo) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      return await response.json();
    }

const getTodos = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${1}`);  //todos
    return await response.json();
}