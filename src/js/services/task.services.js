class TaskService {
  getLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks || tasks.length < 1) {
      localStorage.setItem("tasks", JSON.stringify([]));
      tasks = [];
    }

    return tasks;
  }

  registerTask(task) {
    const tasks = this.getLocalStorage();

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    return 200;
  }

  getTask(id) {
    const tasks = this.getLocalStorage();

    const task = tasks[id];

    return task;
  }

  editTask(id, task) {
    const tasks = this.getLocalStorage();

    tasks[id] = { ...task };

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  editTaskStatus(id, status) {
    const tasks = this.getLocalStorage();

    tasks[id].status = status;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  editAllTasksStatus(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  deleteTask(id) {
    const tasks = this.getLocalStorage();

    tasks.splice(id, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
