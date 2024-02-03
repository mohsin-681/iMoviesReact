import React from 'react'

const Movies = (props) => {
    // console.log(props);
    let { overview } = props.movie;
    overview = overview.split(' ').slice(0, 15).join(" ");
    
  return (
    <>
      <div className="card my-3 mx-3" style={{width: "12rem", backgroundColor: '#B4B4B8'}}>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{(props.movie.name) ? props.movie.name: props.movie.original_title }</h5>
            <p className="card-text">
                {overview} ...
            </p>
            <a href="/" className="btn btn-dark">More info</a>
        </div>
    </div>
    </>
  )
}

export default Movies
