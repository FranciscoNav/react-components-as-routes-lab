import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorData= directors.map(director => 
    <div>
      <h2>Name:{director.name}</h2>
      <ul>Movies: {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {directorData}
    </div>
  );
}

export default Directors
