import React, { useEffect, useState } from 'react';
import Movies from './Movies'; // Import your Movies component

const Home = (props) => {
    // console.log(props);
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
            const response = await fetch(props.url, options);
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
    },[props]); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

    return (
        <div className="container">
        <h3 className='mx-3 my-3'><b>{props.page} Movies</b></h3>
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

export default Home;
