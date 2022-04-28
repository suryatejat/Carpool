import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LogIn from "./Pages/logIn.jsx"
import SignUp from "./Pages/signUp.jsx"
import Selection from "./Pages/selection.jsx"
import BookRide from "./Pages/bookRide.jsx"
import OfferRide from "./Pages/offerRide.jsx"

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