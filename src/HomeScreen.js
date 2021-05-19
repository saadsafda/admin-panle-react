import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css";
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function HomeScreen() {
    const API_KEY = "a0c2d57675337a022c0b23e5677ee69c";

    return (
        <div className="homeScreen">
            <Nav />

            <Banner />   

            <Row
                title="NETFLFIX ORIGINALS"
                fetchUrl={`/discover/tv?api_key=${API_KEY}&with_networks=213`}
                isLargeRow
            />       
            <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Herro Movies" fetchUrl={requests.fetchHerroMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default HomeScreen;
