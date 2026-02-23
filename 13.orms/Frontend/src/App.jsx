import './App.css'
import {Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Task from './components/task_home';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/profile' element={<Task/>}/>
  </Routes>
  )
}

export default App;
