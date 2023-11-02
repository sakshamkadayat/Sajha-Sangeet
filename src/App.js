import './App.css';
import { Player } from '@lottiefiles/react-lottie-player';
import sajha from "./Images/SS.png";

function App() {
  return (
    <div className="App">
    <div className='heading-container'>
    <img src={sajha} alt='logo'></img>
    <h1>Sajha Sangeet</h1>
    </div>
      <div className="animation-container">
        <Player
          autoplay
          loop
          src="https://lottie.host/f1e89478-e429-4c1d-86b1-17e0bc17b13c/vcFXphv7Lz.json"
          style={{ height: '400px', width: '600px' }}
        >
        </Player>
      </div>
      <h1>Website Under Construction</h1>
      <p>© 2023 Sajha Sangeet. All rights reserved</p>
    </div>
  );
}

export default App;
