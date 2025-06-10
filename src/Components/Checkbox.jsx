import { useState } from 'react';
const Checkbox = () => {

    const [skills, setSkills] = useState([]);
    const handleSkills = (e) =>{
        if(e.target.checked){
            setSkills([...skills,e.target.value]);
        }else{
            setSkills(skills.filter((skill) => skill !== e.target.value));
        }
    }

  return (
    <div>
      <h1>Select your skills</h1>
      <input onChange={(event) => handleSkills(event)} type="checkbox" id="dotnet" value="dotnet"/>
      <label htmlFor="dotnet">.NET Core</label>

      <input onChange={(event) => handleSkills(event)} type="checkbox" id="angular" value="angular"/>
      <label htmlFor="angular">Angular</label>

      <input onChange={(event) => handleSkills(event)} type="checkbox" id="sql" value="sql"/>
      <label htmlFor="sql">SQL</label>

      <input onChange={(event) => handleSkills(event)} type="checkbox" id="efcore" value="efcore"/>
      <label htmlFor="efcore">EFCore</label>

      <input onChange={(event) => handleSkills(event)} type="checkbox" id="react" value="react"/>
      <label htmlFor="react">React</label>

        <h3>{skills}</h3>

    </div>
  )
}

export default Checkbox
