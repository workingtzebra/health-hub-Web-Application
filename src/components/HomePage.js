// src/components/HomePage.js
import React, { useState, useEffect } from 'react';

function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api')  // Adjust this endpoint to match your Flask API's route for fetching data.
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(e => {
            setError(e.message);
            setLoading(false);
        });
    }, []); // The empty array ensures this effect runs only once after the component mounts.

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error}</p>;

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Health Hub!</p>
            <h2>Data Fetched:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>  // Displaying fetched data as formatted JSON for clarity.
        </div>
    );
}

export default HomePage;
