import * as React from 'react';

export default function taskList() {
  /* const currentTimestamp = new Date().getTime(); */

  /* React.useEffect( */
  /*   () => console.log("Don't worry about connecting any of this task functionality to the back-end; just handle everything client side."), */
  /*   [], */
  /* ); */

  /* const defaultTasks = [ */
  /*   { name: 'Uncomment the content of this file and fix the compilation errors', dueDate: new Date(currentTimestamp + 3600000) }, */
  /*   { name: 'Implement a button that allows you to mark tasks as complete', complete: false }, */
  /*   { name: 'Implement a feature that allows you to create new tasks with a name and due date and add them to this list', dueDate: new Date(currentTimestamp + 7200000) }, */
  /* ]; */

  /* const [tasks, setTasks] = React.useState([]); */
  /* const setDefaultTasks = () => setTasks(defaultTasks); */

  /* React.useEffect(() => { */
  /*   /1* This is to imitate fetching data from a database or API *1/ */
  /*   setTimeout(setDefaultTasks, 1500); */
  /* }, []) */

  /* const renderTaskListItem = (task, index) => { */
  /*   return( */
  /*     <li key={index}> */
  /*       {`${task.name} | due: ${task.dueDate}`} */
  /*     </li> */
  /*   ) */
  /* } */

  /* const taskList = ( */
  /*   <ol> */
  /*     {tasks.map(renderTaskListItem)} */
  /*   </ol> */
  /* ) */

  return (
    <>
      <p>Put the taskList here</p>
    </>
  )
}
