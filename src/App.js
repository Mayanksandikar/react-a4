import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Nav from './component/Nav'
import Student from './component/Student'
import Contact from './component/Contact'
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
     <Nav />
     <Routes>
       
     <Route path="/home" element={ <Home /> } />
     <Route path="/student" element={ <Student /> } />
     <Route path="/contact" element={ <Contact /> } />

     </Routes>
     </BrowserRouter>
</>
   
 );
}

export default App;