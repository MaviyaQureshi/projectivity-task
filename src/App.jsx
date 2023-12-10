import Structure from "./components/Structure"
import Todo from "./components/Todo";
import InProgress from "./components/InProgress";
import Done from "./components/Done";
import Phases from "./components/Phases";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from "./components/NavBar";
import TaskManager from "./components/TaskManager";
import { Component } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Structure></Structure>
  },
  {
    path: '/todo',
    element: <Todo></Todo>
  },
  {
    path: '/inprogress',
    element: <InProgress></InProgress>
  },
  {
    path: '/done',
    element: <Done></Done>
  },
  {
    path: '/phases',
    element: <Phases></Phases>
  },
])

// #F4F6FF

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;
