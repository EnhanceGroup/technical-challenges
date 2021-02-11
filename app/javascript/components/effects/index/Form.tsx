import * as React from 'react';

import Select from 'react-select';

export default function form() {
  const defaultOption = { label: '', value: '' };

  const [name, setName] = React.useState('');
  const [effectTypeOption, setEffectTypeOption] = React.useState(defaultOption);
  const [subTypeOption, setSubTypeOption] = React.useState(defaultOption);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

  const authToken = document.querySelector('head meta[name="csrf-token"]' as any).content;

  const buttonStyles: React.CSSProperties = {
    backgroundColor: 'green',
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
  };

  const effectTypeOptions = [
    { label: 'Visual', value: 'visual' },
  ];

  const subTypeOptions = [
    { label: 'CGI', value: 'cgi' },
  ];

  return (
    <div>
      <h2>Create a new effect</h2>
      <form method="POST" action="/effects">
        <input type="hidden" name="authenticity_token" value={authToken} />
        <label htmlFor="">Name</label>
        <input name="effect[name]" id="effect_name" type="text" value={name} onChange={handleNameChange}/>
        <input type="hidden" name="effect[effect_type]" id="effect_type" value={effectTypeOption.value} />
        <label htmlFor="">Type</label>
        <Select options={effectTypeOptions} />
        <input type="hidden" name="effect[sub_type]" id="effect_sub_type" value={subTypeOption.value} />
        <label htmlFor="">Sub Type</label>
        <Select options={subTypeOptions} />
        <button style={buttonStyles} >
          Submit
        </button>
      </form>
    </div>
  )
}
