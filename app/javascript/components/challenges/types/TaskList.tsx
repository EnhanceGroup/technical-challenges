import * as React from 'react';
import {FormEvent, useEffect, useState} from "react";

export default function taskList() {
   const currentTimestamp = new Date().getTime();

   const buttonStyles: React.CSSProperties = {
    margin: "10px",
    backgroundColor: 'green',
    padding: '10px 15px',
    borderRadius: '2px',
    fontSize: '16px',
    color: 'white',
    textAlign : 'center'
  };

   const completeStyles: React.CSSProperties = {
       color: "green"
   }

   const incompleteStyles: React.CSSProperties = {
       color: "red"
   }

   function handleComplete (index :number) {
       console.log(index)
       console.log(tasks)
       const tasksCopy = tasks
       tasksCopy[index].complete = true
       setTasks([...tasksCopy])
   }

   useEffect(()=> {
    console.log('complete')

   }, [handleComplete])

   React.useEffect(
     () => console.log("Don't worry about connecting any of this task functionality to the back-end; just handle everything client side."),
     [],
   );

   const defaultTasks: {name:string, dueDate :Date, complete :boolean}[] = [
     { name: 'Uncomment the content of this file and fix the compilation errors', dueDate: new Date(currentTimestamp + 3600000), complete:false},
     { name: 'Implement a button that allows you to mark tasks as complete', dueDate: new Date(currentTimestamp + 3600000),complete: false },
     { name: 'Implement a feature that allows you to create new tasks with a name and due date and add them to this list', dueDate: new Date(currentTimestamp + 7200000), complete:false},
   ];

   interface TaskInterface {
       name: string;
       dueDate: Date;
       complete: boolean;
   }

   const [tasks, setTasks] = React.useState(defaultTasks);
   const setDefaultTasks = () => setTasks(defaultTasks);

   function handleSubmit(event :FormEvent<HTMLFormElement>) {
       event.preventDefault()
       const taskName = event.currentTarget.taskName.value
       const dueDate = event.currentTarget.dueDate.value
       const date = new Date(dueDate)
       const newTask: {name:string, dueDate :Date, complete :boolean} = {name: taskName, dueDate: date, complete: false}
       setTasks(prevState => [...prevState, newTask])
   }

   React.useEffect(() => {
     /1* This is to imitate fetching data from a database or API *1/
     setTimeout(setDefaultTasks, 500);
   }, [])

   const renderTaskListItem = (task :TaskInterface, index :number) => {
     return(
         <>
           <li key={index} style={task.complete ? completeStyles : incompleteStyles}>
             {`${task.name} | Due: ${task.dueDate} | Status: ${task.complete ? "Complete" : "Incomplete"}`}
           </li>
             {!task.complete && <button style={buttonStyles} onClick={() => handleComplete(index)}>Complete Task</button>}
         </>
     )
   };

   const taskList = (
     <ol>
       {tasks.map(renderTaskListItem)}
     </ol>
   )
    const addTask = (
        <>
            <form style={{ textAlign: "center" }} onSubmit={(e)=>handleSubmit(e)}>
                <label>Task Name</label>
                <input type="text" id = "taskName" name="taskName"/>
                <label>Due Date</label>
                <input type="date" id = "date" name="dueDate"/>
                <br/>
                <button type="submit" style={buttonStyles}>Add Task</button>
            </form>
        </>
    )

  return (
    <>
        {taskList}
        {addTask}
    </>
  )
}
