import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [ movie, setMovie ] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    console.log(movie);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <img src="" alt="" />
            {movies.map((movie) => (
                <img 
                className={`row__poster ${isLargeRow} && "row__postreLarge`}
                src={`${base_url} ${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name} 
                    />
            ))}

            </div>
        </div>
    );
}

export default Row;
