import logo from './logo.svg';
import './App.css';
import {useQuery, useSuspenseQuery, useMutation }  from '@tanstack/react-query';
import {Suspense, useState } from 'react';
import createToDoQueryOptions , {createTodoMutationOptions} from './QueryOptions/createToDoQueryOptions'
import FallbackPage from './FallbackPage'
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [ id, setId] = useState(1);
  const {data, refetch} = useSuspenseQuery(createToDoQueryOptions(id))

  const { mutate,  data: createdTodo, isPending ,   isError: isMutationError, error: mutationError} = useMutation(createTodoMutationOptions());

  const handleAddTodo = () => {
    mutate({ title: "New Todo", userId: 1, completed: false });
  };

  return (
  <>
    <ErrorBoundary>
      <Suspense fallback={<FallbackPage />}>
        <div className="App">
          <div>
            <pre>{JSON.stringify(data.slice(0, 10))}</pre>
          </div>
          <button onClick={() => refetch()}>Refresh</button>
          <button onClick={() => setId((p) => p + 1)}>Increment</button>
          <hr />
          <button onClick={handleAddTodo} disabled={isPending}>
            {isPending ? "Adding..." : "Add Todo"}
          </button>
            {createdTodo && (
            <p style={{ color: "green" }}>
              ✅ Created Todo with id: {createdTodo.id}
            </p>
          )}
           {isMutationError && <p style={{ color: "red" }}>{mutationError.message}</p>}

        </div>
      </Suspense>
    </ErrorBoundary>
  </>
  );
}


export default App;
