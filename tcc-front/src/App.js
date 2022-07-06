//This component only deals with routiing of pages

import "./App.css"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Weather from "./pages/Weather"
import UserLoginSignUp from "./pages/UserLoginSignUp"
import AdminLoginSignUp from "./pages/AdminLoginSignUp"
import Admin from "./pages/Admin"
import PageNotFound from "./pages/PageNotFound"

export default function App() {
    
    
  return (
      <>
    {/*declaring Routes*/}
    <Router>
        <Routes>
            <Route path='/' element={<Weather/>} />
            <Route path='/userloginsignup' element={<UserLoginSignUp/>} />
            <Route path='/adminloginsignup' element={<AdminLoginSignUp/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </Router>
    </>
  );
}

