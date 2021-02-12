import * as React from 'react';

export default function Description(props) {
  const { showDescription, handleDescriptionToggle } = props;

  const initialDescription: React.ReactFragment = (
    <>
      <p>To start off this challenge, you will need to enable strict typing in the application:</p>
      <ol>
        <li>First rename the file 'tsconfig.json' in the root directory of this project to 'unstrict-tsconfig.json'</li>
        <li>Now run the command <code>tsc --init --strict --jsx react</code> from the root directory of your project.</li>
        <li>Restart webpack-dev-server. You will start to get compilation errors once you have done this so be prepared for some debugging</li>
      </ol>
    </>
  )

  const nextSteps = (
    <>
      <p>Now import the task list component into the Types component below the Description component and comment out the code that makes up that component.</p>
    </>
  )

  const showNextSteps = (
    <button type="button" onClick={handleDescriptionToggle} >
      Show next steps
    </button>
  )

  return (
    <>
      {showDescription ? nextSteps : initialDescription}
      {showNextSteps}
    </>
  )
}

Description.defaultProps = {
  showDescription: false,
  handleDescription: null,
}
