import  React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Add from "./components/Add";
import List from "./components/List";
import EditTaskModal from "./components/EditTaskModal";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "",
        element: <List />,
      },
      {
        path: "/edit",
        element: < EditTaskModal/>,
      },
      
    ],
  },
]);

export default customRouter;
