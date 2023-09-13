import HomePage from './Components/HomePage'
import './App.css'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Details from './Components/Details'
import Searched from './Components/Searched'
function App() {


  return (
    <BrowserRouter>
       <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/movies/:id' element={<Details/>}></Route>
    <Route path='/search/:content' element={<Searched/>}></Route>

</Routes>
    </BrowserRouter>
  )
}

export default App
