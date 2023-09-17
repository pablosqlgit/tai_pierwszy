import React, { useState } from 'react'

export default function BmiCalculator() {
    const [weightValue, handleWeightChange] = useState();
    const [heightValue, handleHeightChange] = useState();
    let valueOfWeight = weightValue;
    let valueOfHeight = heightValue;
    const handleButtonClick = () =>{
        
    }
    return (
    <div>
        <span>Płeć: </span>
        <input type="radio" name="gender" id="genderInput" />K
        <input type="radio" name="gender" id="genderInput" />M
        <br/>
        <span>Waga: </span>
        <input type="number" name="weight" id="weightInput" onChange={(e)=>handleWeightChange(valueOfWeight = e.target.value)}/> kg
        <br/>
        <span>Wzrost: </span>
        <input type="number" name="height" id="heightInput" onChange={(e)=>handleHeightChange(valueOfHeight = e.target.value)}/> cm
        <br/>
        <button onClick={handleButtonClick()}>Oblicz</button>
    </div>
  )
}
