import badge from './assets/badge.jpg'

const Certificate=()=>{
   const oraginzation="Academy of Learning" 
   const  participantName= "Ajai S S";
   const duration=30;
   const courseName="React js"
    return(
        <div id="outer-border">
            <div id="inner-border">
                <img id="cert-badge" src={badge}/> 
                <p id="cert-orgName" className="cert-small">{oraginzation}</p>
                <p className="cert-big">Certificate of Training</p>
                <p className="cert-small">Presented to</p>
                <p className="cert-big">{participantName}</p>
                <p className="cert-small">for undergoing {duration} days training on {courseName}</p>
            </div>
        </div>
    )
}
export default Certificate;