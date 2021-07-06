import { ITask } from "../interfaces";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface Props {
  task: ITask;
  deleteTask(taskNameDelete: string): void;
  toggleReminder(taskName: string): void;
}

function ToDoTask({ task, deleteTask, toggleReminder }: Props) {
  return (
    <Card
      className={`tasks ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.taskName)}
      variant="outlined"
    >
      <CardContent>
        <Typography className="taskTitle" variant="h5" gutterBottom>
          Task
        </Typography>
        <Typography className="taskName">{task.taskName}</Typography>
        <Typography className="days" component="p">
          {task.day} days to complete
        </Typography>{" "}
        <br />
        <Button
          className="delete"
          onClick={() => deleteTask(task.taskName)}
          color="default"
          variant="contained"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default ToDoTask;
