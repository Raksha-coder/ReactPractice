import React, { useState } from 'react';

const RadioButtonDropdown = () => {

 const [gender, setGender] = useState('female');
 const [city, setCity] = useState('');

 function handleGenderChange(e){
    setGender(e.target.value);
 }

 function handleCityChange(e){
    setCity(e.target.value);
 }

  return (
    <>
    <div>
        <h2>Selected Gender :{gender}</h2>
        <input onChange={(event) => handleGenderChange(event)} checked={gender == 'male'} type="radio" id="male" value="male"  name="gender" />
        <label htmlFor="male">Male</label>

        <input onChange={(event) => handleGenderChange(event)} checked={gender == 'female'} type="radio" id="female" value="female" name="gender" />
        <label htmlFor="female">Female</label>
    </div>

    <div>
        <h2>selected city : {city}</h2>
        <select onChange={(event) => handleCityChange(event)} defaultValue={"pune"}>
            <option value="nagpur">Nagpur</option>
            <option value="delhi">Delhi</option>
            <option value="pune">Pune</option>
            <option value="banglore">Banglore</option>
        </select>
    </div>

    </>
   
  )
}

export default RadioButtonDropdown
