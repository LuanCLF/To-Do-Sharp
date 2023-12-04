class TaskService {
  getLocalStorage() {
    const id = this.getIdTask();
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks || tasks.length < 1) {
      localStorage.setItem("tasks", JSON.stringify([]));
      tasks = [];
    }

    return tasks[id] ?? [];
  }

  setLocalStorage(tasksUser) {
    const id = this.getIdTask();
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[id] = tasksUser;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  removeIdTask() {
    localStorage.removeItem("idTask");
    localStorage.removeItem("user");
  }

  setIdTask(id) {
    localStorage.setItem("idTask", JSON.stringify(id));
  }

  getIdTask() {
    const id = Number(JSON.parse(localStorage.getItem("idTask"))) ?? -1;

    return id;
  }

  getUserName(){
    const name = JSON.parse(localStorage.getItem("user"))

    return name
  }

  registerTask(task) {
    const tasks = this.getLocalStorage();

    tasks.push(task);

    this.setLocalStorage(tasks);

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

    this.setLocalStorage(tasks);
  }

  editTaskStatus(id, status) {
    const tasks = this.getLocalStorage();

    tasks[id].status = status;

    this.setLocalStorage(tasks);
  }

  editAllTasksStatus(tasks) {
    this.setLocalStorage(tasks);
  }

  deleteTask(id) {
    const tasks = this.getLocalStorage();

    tasks.splice(id, 1);

    this.setLocalStorage(tasks);
  }
}
