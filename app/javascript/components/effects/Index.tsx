import * as React from 'react';

import Form from './index/Form';

export default function Index({ effects }) {
  const renderEffect = (effect) => {
    return(
      <li key={effect.id}>
        {`${effect.name} | type: ${effect.effect_type} | sub_type: ${effect.sub_type}`}
      </li>
    )
  };

  return (
    <>
      <ul>
        {effects.length > 0 ? effects.map(renderEffect) : 'Effects list should go here'}
      </ul>
      <Form />
    </>
  );
}

Index.defaultProps = {
  effects: [],
}
