import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Levels from './Levels';
import { CheckUserExist } from '../helper/helper';

/** react routes for main page , quiz page and result page*/
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result/></CheckUserExist>
  },
  {
    path : '/level',
    element : <Levels></Levels>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


