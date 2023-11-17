import { useLoadScript } from '@react-google-maps/api';
import HomePage from './components/HomePage/HomePage';
const libraries = ['places'];

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCzxYx6yohu8vzDGs-JrwpBvmR5rk2IBZ8',
    libraries: libraries,
  });

  return !isLoaded ? <div>Loading...</div> : <HomePage />;
}

export default App;
