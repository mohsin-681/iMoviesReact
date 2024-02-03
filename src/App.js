import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    // Implement your search logic here using TMDb API or other sources
    setSearchQuery(query);
    
      const search_url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      setSearchResults(search_url);
      // const data = await response.json();
      // setSearchResults(data.results);
    // Update searchResults state with the search results
    
  };

  return (
    <div style={{backgroundColor: '#C7C8CC'}}>
    <BrowserRouter>
    <Navbar onSearch={handleSearch} />
      <Routes>
        <Route exact path="/iMoviesReact/" element={<Home page={"Trending"} url={"https://api.themoviedb.org/3/trending/all/day?language=en-US"}/>}  />
        <Route exact path="/iMoviesReact/about" element={<About />} />
        <Route exact path="/iMoviesReact/action" element={<Home page={"Action"} url={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28"}/>} />
        <Route exact path="/iMoviesReact/comedy" element={<Home page={"Comedy"} url={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35"}/>} />
        <Route exact path="/iMoviesReact/all" element={<Home page={"All"} url={"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10752"}/>} />
        <Route exact path="/iMoviesReact/search" element={<Home page={searchQuery.toUpperCase()} url={searchResults} />}
          />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
