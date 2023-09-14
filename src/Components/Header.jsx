import axios from 'axios';
import { useEffect, useState } from 'react';
import later from './images/play.png';
import imdb from './images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import tomato from './images/PngItem_1381056 1.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const movienum = Math.floor(Math.random() * 19);
  const [name, setName] = useState('');
  const [movieId, setMovieId] = useState('');
  const [overview, setOverview] = useState('');
  const [poster, setPoster] = useState('');
  const [imdbId, setImdbIds] = useState('')
  const getMovieData = () => {
    const options = {
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${movienum}&sort_by=popularity.desc`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64',
      },
    };

    axios(options)
      .then((response) => {
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setPoster(`https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}`);
        setMovieId(randomMovie.id);
        setName(randomMovie.original_title);
        setOverview(randomMovie.overview);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovieData();
  }, []);



  return (
    <>
      <div className="image-container poster">
        <img src={poster} alt="Your Image" />
      </div>
      <header>
        <Navbar clas="headerNav" />
        <div className="content">
          <h1>{name}</h1>
          <div className="rate">
            <div>
              <img src={imdb} alt="IMDb" />
              <p>86.0 / 100</p>
            </div>
            <div>
              <img src={tomato} alt="Tomato" />
              <p>97%</p>
            </div>
          </div>
          <p>{overview}</p>
         <Link to={`/movies/${movieId}`} ><button>
            <img src={later} alt="Play" /> Watch trailer
          </button></Link> 
        </div>
      </header>
    </>
  );
};

export default Header;
