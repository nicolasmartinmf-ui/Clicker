import './App.css';
import shopLogo from './images/shop-logo.png';
import Button from "./components/Button";
import Counter from "./components/Counter";
import {useState} from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
      setNumClicks(numClicks + 1);
  }
  const manageReset = () => {
      setNumClicks(0);
  }
  return (
    <div className="App">
        <div className="shop-logo-container">
            <img className='shop-logo'
            src={shopLogo}
            alt="Shop's logo"/>
        </div>
        <div className="main-container">
            <Counter numClicks={numClicks} />
            <Button
            text="Click me"
            Click={true}
            manageClick={manageClick}
            />
            <Button
            text="Reset"
            Click={false}
            manageClick={manageReset}
            />
        </div>
    </div>
  );
}

export default App;
