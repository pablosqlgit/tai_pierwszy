import React, { useState } from 'react'

export default function BmiCalculator() {
    let [genderValue, handleGenderChange] = useState();
    let [weightValue, handleWeightChange] = useState();
    let [heightValue, handleHeightChange] = useState();
    const handleButtonClick = () =>{
        console.log('przycisk dziala')
    }
    return (
    <div>
        <span>Płeć: </span>
        <input type="radio" name="gender" id="genderInput" onChange={(e)=>{handleGenderChange(genderValue = "female")}} />K
        <input type="radio" name="gender" id="genderInput" onChange={(e)=>{handleGenderChange(genderValue = "male")}}/>M
        <br/>
        <span>Waga: </span>
        <input type="number" name="weight" id="weightInput" onChange={(e)=>handleWeightChange(weightValue = e.target.value)}/> kg
        <br/>
        <span>Wzrost: </span>
        <input type="number" name="height" id="heightInput" onChange={(e)=>handleHeightChange(heightValue = e.target.value)}/> cm
        <br/>
        <button onClick={handleButtonClick}>Oblicz</button>
    </div>
  )
}
