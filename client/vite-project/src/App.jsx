import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define routes with the correct syntax using curly braces
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,  // Use the Login component here
  },
  {
    path: '/register',
    element: <Register />,  // Use the Register component here
  },
  {
    path: '/dashboard',
    element: <Dashboard />,  // Use the Dashboard component here
  }
]);

function App() {
  return (
    <>
      {/* Use RouterProvider to connect the router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
