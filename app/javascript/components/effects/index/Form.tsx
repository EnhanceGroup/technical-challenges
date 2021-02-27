import * as React from 'react';

import Select from 'react-select';
import {useEffect, useState} from "react";


export default function Form() {
  const defaultOption = { label: '', value: '' };

  const [name, setName] = React.useState('');
  const [effectTypeOption, setEffectTypeOption] = React.useState(defaultOption);
  const [subTypeOption, setSubTypeOption] = React.useState(defaultOption);
  const [effectTypeOptions, setEffectTypeOptions] = useState([])
  const [subTypeOptions, setSubTypeOptions] = useState([])
  const [mainObject, setMainObject] = useState({})

  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content;

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

  const handleEffectChange = (event) => {
    const chosenEffect = event.value
    console.log(chosenEffect)
    console.log(mainObject)
    const options = mainObject[chosenEffect]
    console.log(options)
    const formattedOptions = options.map(((val) => {return {label: capitalizeFirstLetter(val), value: val}}))
    console.log(formattedOptions)
    setSubTypeOptions(formattedOptions)
    for (var i = 0; i< effectTypeOptions.length;i++) {
      const effect = effectTypeOptions[i]
      if (effect['value'] === chosenEffect){
        console.log(effect)
        setEffectTypeOption(effect)
      }
    }
  }

  const handleSubTypeChange = (event) => {
    const chosenSubType = event.value
    for (var i = 0; i< subTypeOptions.length; i++) {
      const subType = subTypeOptions[i]
      if (subType['value'] === chosenSubType){
        console.log(subType)
        setSubTypeOption(subType)
  }
    }
  }

  function getMainObject (){
    fetch('/effects/e_s_o')
        .then(response => response.json())
        .then(response => {
        console.log(response)
          setMainObject(response)
        })
    }


  function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
  }

  async function getEffectTypes(){
    fetch('/effects/effect_types')
        .then(response => response.json())
        .then(response => {
          const array = Object.keys(response)
          const newArray = array.map((val) => {return {label: capitalizeFirstLetter(val), value: val}})
          setEffectTypeOptions(newArray)
        })
        .catch(e => console.log('error'))
  }

  useEffect(() => {

    getEffectTypes()
    getMainObject()

  }, [])


  return (
    <div>
      <h2>Create a new effect</h2>
      <form method="POST" action="/effects">
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Name</label>
        <input name="effect[name]" id="effect_name" type="text" value={name} onChange={handleNameChange}/>
        <input type="hidden" name="effect[effect_type]" id="effect_type" value={effectTypeOption.value} />
        <label htmlFor="">Type</label>
        <Select options={effectTypeOptions} onChange={handleEffectChange}/>
        <input type="hidden" name="effect[sub_type]" id="effect_sub_type" value={subTypeOption.value} />
        <label htmlFor="">Sub Type</label>
        <Select options={subTypeOptions} onChange={handleSubTypeChange}/>
        <button style={buttonStyles}>
          Submit
        </button>
      </form>
    </div>
  )
}
