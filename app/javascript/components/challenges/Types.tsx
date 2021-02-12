import * as React from 'react';

import Description from './types/Description';

export default function Types() {

  const [showDescription, SetShowDesciption] = React.useState(false);
  const handleDescriptionToggle = () => SetShowDesciption(current => !current)

  const descriptionProps = { showDescription, handleDescriptionToggle }

  return (
    <>
      <h1>You're not my Type</h1>
      <Description  />
    </>
  );
}
