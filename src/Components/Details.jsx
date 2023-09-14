import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import './details.css';
import DetailsNavbar from './DetailsNavbar';
import later from './images/play.png';
import tomato from './images/PngItem_1381056 1.png';
import imdb from './images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [newmovieDetails, setNewMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTmdbMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64',
        },
      };

      try {
        const response = await axios(url, options);
        setMovieDetails([response.data]);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchTmdbDetails = async () => {
      if (movieDetails.length > 0) {
        const url = `https://api.themoviedb.org/3/movie/${movieDetails[0].id}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64',
          },
        };

        try {
          const response = await axios(url, options);
          setNewMovieDetails(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
    };

    const fetchMovieData = async () => {
      await fetchTmdbMovieDetails();
      await fetchTmdbDetails();
      setTimeout(() => {
        setIsLoading(true);
      }, 3000);
    };

    fetchMovieData();
  }, [id, movieDetails]);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="detail">
            <DetailsNavbar />
            {movieDetails.length === 0 ? (
              <h1 style={{ fontFamily: 'Dm sans' }}>No Results Found</h1>
            ) : (
              movieDetails.map((item) => (
                <b>
                  <div className="postDetails" key={item.id}>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
                        alt="Your Image"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h1 data-testid="movie-title">{item.original_title}</h1>
                    <h4 style={{ color: 'black', fontFamily: 'Dm sans', fontWeight: '400' }}>{newmovieDetails.tagline}</h4>
                    <div className="rate">
                      <div>
                        <img src={imdb} alt="IMDb" />
                        <p>{item.popularity} / 100</p>
                      </div>
                      <div>
                        <img src={tomato} alt="Tomato" />
                        <p>97%</p>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Dm sans' }}>Genres: {newmovieDetails.genres.map((item) => <>{item.name + ' '}</>)}</div>
                    <p data-testid="movie-release-date">{newmovieDetails.release_date}</p>
                    <p data-testid="movie-runtime">{newmovieDetails.runtime}</p>
                    <p data-testid="movie-overview">{item.overview}</p>
                    <button style={{ color: 'white', fontFamily: 'Dm sans' }}>
                      <img src={later} alt="Play" /> Watch trailer
                    </button>
                  </div>
                </b>
              ))
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
