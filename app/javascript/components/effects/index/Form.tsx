import * as React from 'react';

import Select from 'react-select';
import {useEffect, useState} from "react";
import {string} from "prop-types";

export default function Form() {
  const defaultOption = { label: '', value: '' };
  const mainObjDefault = { effect: ['subType']};

  const [name, setName] = React.useState('');
  const [effectTypeOption, setEffectTypeOption] = React.useState(defaultOption);
  const [subTypeOption, setSubTypeOption] = React.useState(defaultOption);
  const [effectTypeOptions, setEffectTypeOptions] = useState([defaultOption])
  const [subTypeOptions, setSubTypeOptions] = useState([defaultOption])
  const [mainObject, setMainObject] = useState(mainObjDefault)

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

  interface EventInterface{
    label:string,
    value: string
  }

  const handleEffectChange = (event :EventInterface) => {
    const chosenEffect :keyof typeof mainObject = event.value
    const options = mainObject[chosenEffect]
    const formattedOptions = options.map(((val) => {return {label: capitalizeFirstLetter(val), value: val}}))
    setSubTypeOptions(formattedOptions)
    for (var i = 0; i< effectTypeOptions.length;i++) {
      const effect = effectTypeOptions[i]
      if (effect['value'] === chosenEffect){
        console.log(effect)
        setEffectTypeOption(effect)
      }
    }
  }

  const handleSubTypeChange = (event :{label:string, value:string}) => {
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


  function capitalizeFirstLetter(word :string) {
  return word[0].toUpperCase() + word.slice(1);
  }


  function getEffectTypes(){
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
        <Select options={effectTypeOptions} onChange={(e)=>handleEffectChange(e)}/>
        <input type="hidden" name="effect[sub_type]" id="effect_sub_type" value={subTypeOption.value} />
        <label htmlFor="">Sub Type</label>
        <Select options={subTypeOptions} onChange={(e)=>handleSubTypeChange(e)}/>
        <button style={buttonStyles}>
          Submit
        </button>
      </form>
    </div>
  )
}
