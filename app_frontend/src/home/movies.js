import { useState } from 'react';
import Reviews from '../reusable/Reviews.js';
import './movies.css';

const MovieShowcaser = ({ setShowMovie }) => {
  return (
    <div className='movieShowcaserBackground'>
      <div>
        <div className='movieShowcaser'>
          <div className='movieShowcaserContent'>
            <p
              className='movieShowcaserClose'
              onClick={() => {
                setShowMovie(false);
              }}
            >
              X
            </p>
            <h2>Movie Name</h2>
            <p style={{ textAlign: 'left' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>Write your review</p>
            <textarea className='movieShowcaserReviewArea'></textarea>
            <button
              onClick={() => {
                setShowMovie(false);
              }}
            >
              Submit
            </button>
            <div className='movieShowcaserReviews'>
              <h3>Other movie reviews</h3>
              <Reviews />
              <Reviews />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Movies = () => {
  const [showMovie, setShowMovie] = useState(false);
  const [movieName, setMovieName] = useState('');
  return (
    <>
      {showMovie && <MovieShowcaser setShowMovie={setShowMovie} />}
      <div className='movies'>
        <h3>Movies</h3>
        <div className='moviesContainer'>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie1.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie2.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie3.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie4.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie5.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
          <div
            className='moviesItem'
            onClick={() => {
              setShowMovie(!showMovie);
              setMovieName('name');
            }}
          >
            <img
              src={require('../images/movie6.jpeg')}
              className='moviesImage'
            />
            <p>name</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Movies;
