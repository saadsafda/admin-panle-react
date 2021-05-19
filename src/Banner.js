import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1 ) + "..." : string;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }} >
            <div className="benner__contents">
                <h1 className="benner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="benner__buttons">
                    <button className="benner__button">Play</button>
                    <button className="benner__button">My List</button>
                </div>
                <h1 className="benner__description">
                {truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="benner--fadeBottom" />
        </header>
    );
}

export default Banner;
