import React, { useEffect, useState } from 'react';

function ExercisePage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('/api/exercises')
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <div>
      <h1>Exercises</h1>
      {exercises.map(exercise => (
        <div key={exercise.id}>
          <h3>{exercise.name}</h3>
          <p>{exercise.description}</p>
          <video src={exercise.video_url} controls></video>
        </div>
      ))}
    </div>
  );
}

export default ExercisePage;
