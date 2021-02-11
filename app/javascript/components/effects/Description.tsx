import * as React from 'react';

export default function Description() {
  const [showDescription, setShowDescription] = React.useState(false);

  const toggleShowDescription = () => setShowDescription(current => !current);

  const showHideButton = (
    <button type="button" onClick={toggleShowDescription}>
      {showDescription ? 'Hide Task Description' : 'Show Task Description'}
    </button>
  );

  const taskDescription = (
    <>
      <p>You will need to:</p>
      <ol>
        <li>Get the list of effects to display below</li>
        <li>Complete the implementation of the React-Select so that the various enum values can be used to create different effects.</li>
        <li>Implement some validation on the Effect class so that only the correct sub_types can be submitted for each of the effect_types</li>
        <li>Implement functionality to only display the correct sub_types once the user has selected the effect_type</li>
        <li>Fix all the bugs and issues associated with submitting the form</li>
      </ol>
      <p>Things to consider while working on this task</p>
      <ul>
        <li>Where possible, especially with enums, we want to declare the possible values in as few places as possible</li>
        <li>We also want to have to change the smallest number of lines of code if we were to add another effect_type or sub_type</li>
      </ul>
      <hr />
    </>
  )

  return (
    <>
      <h1>It's all for effect</h1>
      <p>For this task you will need to finish the implementation of a feature that tracks various types of effects</p>
      {showDescription && taskDescription}
      {showHideButton}
    </>
  )
}
