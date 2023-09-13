import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon from './images/Icon.png';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [movies, setMovies] = useState([]);
  const [imdbIds, setImdbIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [heartClicked, setHeartClicked] = useState([]);

  const toggleHeartColor = (index) => {
    const newHeartClicked = [...heartClicked];
    newHeartClicked[index] = !newHeartClicked[index];
    setHeartClicked(newHeartClicked);
  };

  const getMovieData = () => {
    const options = {
      url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64',
      },
    };

    axios(options)
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovieData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchImdbIds = async () => {
      const options = {
      url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64',
      }
    }
    }

    if (movies.length > 0) {
      fetchImdbIds();
    }
  }, [movies]);

  return (
    <section className="feature">
      <div className="title">
        <h1>Featured Movies</h1>
        <a>
          See More <img src={icon} alt="Icon" />
        </a>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cards">
          {movies.map((item, index) => (
            <div className="card container" key={item.id} data-testid="movie-card">
              <div className="">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} data-testid="movie-poster" />
                <div
                  className="heart"
                  style={{ backgroundColor: heartClicked[index] ? 'red' : 'white' }}
                  onClick={() => toggleHeartColor(index)}
                ></div>
              </div>
              <div className="details">
                <Link to={`/movies/${imdbIds[index]}`} style={{ textDecoration: 'none' }}>
                  <h4 data-testid="movie-title">{item.original_title}</h4>
                </Link>
                <div className="rate">
                  Released: <p data-testid="movie-release-date">{item.release_date}</p>
                </div>
                <div className="imdb-id">
                  IMDb ID: <span>{imdbIds[index]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Featured;
