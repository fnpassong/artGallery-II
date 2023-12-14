
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Public } from './layout/Public';
import { Location } from './pages/Location';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Public/>} >
        <Route index element= {<Home/>} />
        <Route path='/location' element={<Location/>} />

      </Route>

      
    </Routes>
  )
}

export default App
