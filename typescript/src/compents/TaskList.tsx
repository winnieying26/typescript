import React from 'react'
import "./styles.css"
import { Task } from '../model'
import SingleTask from './SingleTask'


interface Props{
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTasks: Task[];
    setCompletedTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props>= ({tasks, setTasks, completedTasks, setCompletedTask} ) => {
  return (
    <div className="container">
        <div className="tasks">
       <span className="tasks__heading">
        Active Tasks
       </span>
       {
        tasks.map((task, index)=>(
           < SingleTask 
           index ={index}
           task={task}
           tasks={tasks}
           setTasks={setTasks}
           key={task.id}/>
        ) )
       }
        </div>
        <div className="tasks  remove">
        <span className="tasks__heading">
        Completed Tasks
       </span>
       {
        tasks.map((task, index)=>(
           < SingleTask 
           index={index}
           task={task}
           tasks={completedTasks}
           setTasks={setCompletedTask}
           key={task.id}/>
        ) )
       }
        </div>
    </div>
  )
}

export default TaskList
