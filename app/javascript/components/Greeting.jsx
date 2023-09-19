import React, { useState, useEffect } from 'react';

const RandomGreeting = () => {
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch a random greeting from your API endpoint
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => {
        setGreeting(data.greeting);
        setIsLoading(false); // Data has been fetched, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle errors and set loading to false
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default RandomGreeting;
