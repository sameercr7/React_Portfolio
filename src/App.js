import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Body from './Body';
function App() {
 const approuter=createBrowserRouter([
    {
      path:'/',
      element:<Body/>
    }
  ])
  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
  );
}

export default App;
