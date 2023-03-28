import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout';
import Home from './components/home/Home'
import Login from './components/login/Login'

function App() {
  const routerObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={routerObj}/>
    </div>
  );
}

export default App;
