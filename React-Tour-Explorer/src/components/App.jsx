import React, { useState, useEffect } from 'react';
import DestinationSelector from './DestinationSelector';
import Gallery from './Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('');

  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://course-api.com/react-tours-project'); // Replace with your API URL
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

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRefresh = () => {
    fetchTours();
  };

  return (
    <div>
      <h1>Tour Explorer</h1>
      {loading && <p>Loading tours...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <DestinationSelector
            tours={tours}
            selectedDestination={selectedDestination}
            onDestinationChange={setSelectedDestination}
          />
          <Gallery
            tours={tours}
            selectedDestination={selectedDestination}
            onRefresh={handleRefresh}
          />
        </>
      )}
    </div>
  );
};

export default App;