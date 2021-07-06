import { useState, ChangeEvent } from "react";
import { ITask } from "./interfaces";
import ToDoTask from "./Components/ToDoTask";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [day, setDate] = useState<number>(0);
  const [reminder, setReminder] = useState<boolean>();
  const [todoList, setTodoList] = useState<ITask[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.className === "task") setTask(event.target.value);
    else setDate(Number(event.target.value));
  }

  function addTask() {
    const newTask = { taskName: task, day: day, reminder: false };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDate(0);
    setReminder(false);
  }

  function deleteTask(taskNameDelete: string) {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameDelete;
      })
    );
  }

  function toggleReminder(taskName: string) {
    setTodoList(
      todoList.map((task) =>
        task.taskName === taskName
          ? { ...task, reminder: !task.reminder }
          : task
      )
    );
  }

  return (
    <div className="App">
      <h1 className="heading">TO DO LIST</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter task"
          className="task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter number of days"
          className="day"
          value={day}
          onChange={handleChange}
        />

        <br />
        <Button
          onClick={() => addTask()}
          className="addTask"
          color="default"
          variant="contained"
        >
          Add Task
        </Button>
        {/* <div>
          <label>Set reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            // value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div> */}
      </div>
      <div className="taskList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <ToDoTask
              task={task}
              key={key}
              deleteTask={deleteTask}
              toggleReminder={toggleReminder}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
