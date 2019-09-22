import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';



function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Dashboard />
            </div>
        </BrowserRouter>
    )
}

export default App;
