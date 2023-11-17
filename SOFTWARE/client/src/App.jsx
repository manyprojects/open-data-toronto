import { useLoadScript } from '@react-google-maps/api';
import HomePage from './components/HomePage/HomePage';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  return !isLoaded ? <div>Loading...</div> : <HomePage />;
}

export default App;
