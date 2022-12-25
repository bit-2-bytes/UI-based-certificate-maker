
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import badge from './assets/badge.jpg'
import './App.css';

function App() {
  const [theme, settheme] =useState("rgb(129, 129, 255)"); 
  const [organization, setOrgname] =useState("Academy of Learning"); 
  const [trainingType, settrainingType] =useState("Training"); 
  const [participantName, setparticipantName]= useState("Mr.Rajesh");
  const [desription ,setdescription]=useState("For undergoing 30 days training on React Js")

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
        <div id="app-header"> Certificate Maker Using React js </div>
        <div id="app-container">        
        <div id="outer-border" ref={componentRef} style={{backgroundColor:theme}}>
                <div id="inner-border">
                    <img id="cert-badge" src={badge}/> 
                    <p id="cert-orgName" className="cert-small">{organization}</p>
                    <p className="cert-big">Certificate of {trainingType}</p>
                    <p className="cert-small">Presented to</p>
                    <p className="cert-big">{participantName}</p>
                    <p className="cert-small">{desription}</p>
                </div>
            </div>
            <div id="app-controls">
            <div id="inputs">
            <label>Select Theme </label>
              <select value={theme} onChange={(e) => settheme(e.target.value)}>
                  <option value="rgb(129, 129, 255)">Cool blue</option>
                  <option value="#3CB371">Sea Green</option>
                  <option value="#FFA500">Orange</option>
              </select>
            <label>Name Of Issuing Organisation</label>
            <input type="text" value={organization} onChange={(e) => setOrgname(e.target.value)}></input>
            <label>Type of Certification </label>
              <select value={trainingType} onChange={(e) => settrainingType(e.target.value)}>
                  <option value="Training">Training</option>
                  <option value="Completion">Completion</option>
                  <option value="Participation">Participation</option>
              </select>
              <label>Name Of Person</label>
            <input type="text" value={participantName} onChange={(e) => setparticipantName(e.target.value)}></input>
            <label>Certificate desription</label>
            <textarea type="text" value={desription} onChange={(e) => setdescription(e.target.value)}/>
            <button onClick={handlePrint}>Download</button>
            </div>
        </div>
        </div>
   </div>
  );
}

export default App;
