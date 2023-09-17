import React, { useState } from 'react'

const BmiResult = (props) =>{
    const bmiValueCheck = () =>{
        if (props.value < 18.5) {
            return 'Masz niedowage, jedz więcej!';
        } else if (props.value >= 18.5 && props.value < 24.9) {
            return 'Twoja waga jest zdrowa, tak trzymaj!'
        } else if (props.value >= 25.0 && props.value < 29.9) {
            return 'Masz nadwage, schudnij!';
        } else if (props.value >=30) {
            return 'Masz otyłość, popracuj nad sobą!';
        };
    };
    return <div>{`Twoje bmi wynosi: ${props.value}. ${bmiValueCheck()}`}</div>;
}

export default function BmiCalculator() {
    let [weightValue, handleWeightChange] = useState();
    let [heightValue, handleHeightChange] = useState();
    const [isDivShown, setIsDivShown] = useState();
    const bmiValue = (weightValue / (heightValue/100)**2).toFixed(2);
    const handleButtonClick = () =>{
        setIsDivShown(() => true)
    }
    return (
        <div>
        <span>Waga: </span>
        <input type="number" name="weight" id="weightInput" onChange={(e)=>handleWeightChange(
            weightValue = e.target.value,
            setIsDivShown(() => false)
            )}/> kg
        <br/>
        <span>Wzrost: </span>
        <input type="number" name="height" id="heightInput" onChange={(e)=>handleHeightChange(
            heightValue = e.target.value,
            setIsDivShown(() => false)
            )}/> cm
        <br/>
        <button onClick={handleButtonClick}>Oblicz</button>
        {weightValue !== '' && heightValue !== '' && isDivShown && <BmiResult value={bmiValue}/>}
    </div>
  )
}

