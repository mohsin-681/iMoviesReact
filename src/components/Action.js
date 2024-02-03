import React, { useEffect, useState } from 'react';
import Movies from './Movies'; // Import your Movies component

const Action = () => {
    const [moviesData, setMoviesData] = useState([]); // State to store movies data

    const api_call = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTI5YWIzYWVhY2ZkNjgyMDNmNDViMzg5MTFhMzNkNyIsInN1YiI6IjY1OWQzMThjYzQ5MDQ4MDBlZTJmYmM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5IDMkQBbXFu_11sKhFQS4xdbf13oEi6J7EKbRGbRGk'
            }
        };

        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28', options);
            const data = await response.json();

            // Update the state with the fetched data
            setMoviesData(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Call the API function when the component mounts
        api_call();
    }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

    return (
        <div className="container">
            <div className="row">
                {moviesData.map((movie, index) => (
                    <div className="col-md-3" key={index}>
                        {/* Pass individual movie data to the Movies component */}
                        <Movies movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Action;
