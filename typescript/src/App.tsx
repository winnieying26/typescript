import React, { useState } from "react";
import "./App.css";
import InputFeild from "./compents/InputFeild";
import {Task} from "./model"
import TaskList from "./compents/TaskList";


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTask] = useState<Task[]>([])

  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault();
    if(task){
      setTasks([...tasks, {id : Date.now().toString(), task, isDone: false}]);
      setTask("")
    }
  }
  console.log(tasks)
  
  return (
    <div className="App">
      <span className="heading">Task Tracker</span>
      <InputFeild task={task} setTask= {setTask} handleAdd ={handleAdd} />
      <TaskList 
      tasks={tasks} 
      setTasks={setTasks} 
      completedTasks={completedTasks}
      setCompletedTask={setCompletedTask}/> 
    </div>
  );
};

export default App;
