import { useLoadScript } from '@react-google-maps/api';
import HomePage from './components/HomePage/HomePage';
const libraries = ['places'];

function App() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: 'AIzaSyD6oYJB9_Jk833g_FrZrSzBiRvEVQPve-0',
    libraries: libraries,
  });

  return !isLoaded ? <div>Loading...</div> : <HomePage />;
}

export default App;
