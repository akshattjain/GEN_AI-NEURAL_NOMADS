import React, { useState } from 'react';

const Home = () => {
    const [file, setFile] = useState(null);
    const [drugName, setDrugName] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setDrugName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('drugName', drugName);

        try {
            const response = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            console.log(result.similarDrugs); // Handle the result
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="home-container">
            <h1>Drug Genesis</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Enter drug name" 
                    value={drugName} 
                    onChange={handleNameChange} 
                    required 
                    className="drug-name-input"
                />
                <input 
                    type="file" 
                    accept=".csv" 
                    onChange={handleFileChange} 
                    required 
                    className="file-input"
                />
                <button type="submit" className="submit-button">Upload</button>
            </form>
        </div>
    );
};

export default Home;
