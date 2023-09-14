import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Navbar from './Navbar';
import propType from 'prop-types'
import '../../searched.css'
const Searched = ({con}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxNjg5NWNiMmQ1MzNiNWY4MWJmNjk2ZWNkYWQ1MSIsInN1YiI6IjY0ZmVjYmJhZGI0ZWQ2MTAzNDNlZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IRdbDejGYWwScmljrO1N1uRLGhQHBN0cRWvhVmQ6a64'; // Replace with your API key
        const url = `https://api.themoviedb.org/3/search/movie?query=${con}&include_adult=false&language=en-US&page=1`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await axios(url, options);

        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }

        setMovies(response.data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error:', error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [con]);

  return (
    <div>
      <section className="searched">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {movies.length === 0 ? (
             <h1></h1>
            ) : (
              <div className="cards">
                {movies.map((item) => (
                  <div className="card" key={item.id} data-testid="movie-card">
                    <Link to={`/movies/${item.id}`} style={{ textDecoration: 'none' }}>
                      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`} alt={item.original_title} data-testid="movie-poster" />
                    </Link>
                    <div className="details">
                      <Link to={`/movies/${item.id}`} style={{ textDecoration: 'none' }}>
                        <h4 data-testid="movie-title" style={{color:"black",fontFamily:"Dm sans"}}>{item.original_title}</h4>
                      </Link>
                      <div className="rate" style={{color:"black",fontFamily:"Dm sans"}}>
                        Released: <p data-testid="movie-release-date">{item.release_date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Searched;
Searched.propType ={
  con:propType.string
}
