import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//biblioteci
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";

//actions
import { logoutAction } from "./actions/logout";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";


//Rute
const router = createBrowserRouter([

  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index: true,
        //path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
      },
      {
        path:"logout",
        //element: <p>Ai ieșit din cont!</p>,
        action: logoutAction
      }
    ]
  },

]);

function App() {
 

  return (
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer />
      </div>

  )
}

export default App;
