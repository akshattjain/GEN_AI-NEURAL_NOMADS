import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompoundDetailsPage from './pages/CompoundDetailsPage';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compound/:id" element={<CompoundDetailsPage />} />
            </Routes>
        </div>
    );
};

export default App;
