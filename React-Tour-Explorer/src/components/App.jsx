import React, { useState, useEffect } from 'react';
import Counter from './Counter'; // Assuming Counter is a child component

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(''); // For filtering tours

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://api.example.com/tours'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Filtered tours based on the filter state
  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Tour Explorer</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <input
            type="text"
            placeholder="Filter tours"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <ul>
            {filteredTours.map((tour) => (
              <li key={tour.id}>{tour.name}</li>
            ))}
          </ul>
        </>
      )}
      <div className="card">
        <Counter
          tours={tours}
          loading={loading}
          error={error}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;