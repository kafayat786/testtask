import React, { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import TaskForm from "./tasks/taskForm";
import Tasklists from "./tasks/tasklists";
import { tasksData } from "./tasks/testData";
import funfox from "./assets/funfox.png";
import { Toast } from "primereact/toast";
const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const toast = useRef(null);

  const show = (content) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: content,
      life: 2000,
    });
  };
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    show("Task added successfully");
  };
  const markAsCompleted = (taskToComplete) => {
    console.log(taskToComplete);

    const updatedTasks = tasks.map((task) =>
      task === taskToComplete ? { ...task, completed: !task.completed } : task
    );
    show("Task completed successfully");
    setTasks(updatedTasks);
  };

  const deleteTask = (taskToDelete) => {
    console.log(taskToDelete);
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    show("Task deleted successfully");
  };

  return (
    <>
      <div className="content-header">
        <img src={funfox} alt="finfox" className="me-2" />{" "}
        <h1 className="mb-0">Task Management System</h1>
      </div>
      <Container className="wrapper mb-4">
        <Row>
          <TaskForm addTask={addTask} />
          <Tasklists
            tasks={tasks}
            setTasks={setTasks}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
          />
        </Row>
        <Toast ref={toast} position="top-right" />
      </Container>
    </>
  );
};

export default App;
