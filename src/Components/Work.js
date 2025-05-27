
import React from 'react';
import weatherImage from '../assets/weather.jpg'; 
import movieImage from '../assets/Movie.jpg'; 
import portImage from '../assets/Myportfolio.jpg'; 
import WorkCard from './WorkCard';
import './Work.css';

function Work() {
  return (
    <div className="work-container">
      {/* <h2 className="work-title"> MY PROJECTS</h2>
     <p className="work-subtitle"> Still Working</p> */}
      
      <div className="work-grid">
        <WorkCard
          title="Portfolio Website"
          description="A personal portfolio made with React.js and CSS to showcase my projects and skills."
          image={portImage}
          // demoLink="https://your-live-portfolio.com"
          codeLink="https://github.com/benjupokhrel/Portfolio"
        />
        <WorkCard
          title="Weather Forecast"
          description="Dreamy, animated weather app using OpenWeather API, with smooth transitions and dynamic styling."
          image={weatherImage}
          // demoLink="https://your-live-weather-app.com"
          codeLink="https://github.com/benjupokhrel/Weather-Forecast"
        />
        <WorkCard
          title="Movie App"
          description="Modern movie search and discovery app built with React and tailwind CSS, using a movie API like TMDB."
          image={movieImage}
          // demoLink="https://your-movie-app.com"
          codeLink="https://github.com/benjupokhrel/React-movie-app"
        />
      </div>
    </div>
  );
}

export default Work;

