import Certificate from './Certificate';
import Inputs from './Inputs';
import Templates from './Templates';
import './App.css';

function App() {
  return (
    <div>
        <div id="app-header"> Cetificate Maker Using React js </div>
        <div id="app-container">
          <Templates/>
          <Certificate/>
          <Inputs/>
        </div>
   </div>
  );
}

export default App;
