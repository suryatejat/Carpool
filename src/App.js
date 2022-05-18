import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LogIn from "./Pages/LogIn.jsx"
import SignUp from "./Pages/SignUp.jsx"
import Selection from "./Pages/Selection.jsx"
import BookRide from "./Pages/BookRide.jsx"
import OfferRide from "./Pages/OfferRide.jsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LogIn/>}></Route>
                <Route exact path='/signUp' element={<SignUp/>}></Route>
                <Route exact path='/selection' element={<Selection/>}></Route>
                <Route exact path='/bookRide' element={<BookRide/>}></Route>
                <Route exact path='/offerRide' element={<OfferRide/>}></Route>
            </Routes>
        </Router>
        
    );
}

export default App;