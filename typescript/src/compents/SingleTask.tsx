import React, { useEffect, useRef, useState } from "react";
import { Task } from "../model";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

type Props = {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const SingleTask = ({ index, task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleDone = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="task__single" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="task__single--text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      ) : task.isDone ? (
        <s className="task__single--text">{task.task}</s>
      ) : (
        <span className="task__single--text">{task.task}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdOutlineDoneOutline />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <RiDeleteBin5Line />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
