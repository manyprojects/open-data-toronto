import { useLoadScript } from '@react-google-maps/api';
import HomePage from './components/HomePage/HomePage';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDoVgew2-FFcZT20wm33gLVXP6uvgfL6d0',
    libraries: ['places'],
  });

  return !isLoaded ? <div>Loading...</div> : <HomePage />;
}

export default App;
