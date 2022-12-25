const Inputs=()=>{
    return(
        <div id="app-controls">
            <div id="inputs">
            <label>Name Of Issuing Organisation:</label>
            <input type="text"  onChange={(e) => console.log(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Inputs;