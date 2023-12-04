function createTaskController() {
  const createTaskTitle = document.querySelector("#create-task-title");
  const createTaskStartDate = document.querySelector("#create-task-start-date");
  const createTaskStartTime = document.querySelector("#create-task-start-time");
  const createTaskEndDate = document.querySelector("#create-task-end-date");
  const createTaskEndTime = document.querySelector("#create-task-end-time");
  const createTaskDescription = document.querySelector(
    "#create-task-description"
  );

  const task = {
    title: createTaskTitle.value,
    startDate: createTaskStartDate.value,
    startTime: createTaskStartTime.value,
    endDate: createTaskEndDate.value,
    endTime: createTaskEndTime.value,
    status: "Pendente",
    description: createTaskDescription.value,
  };

  new TaskService().registerTask(task);

  showTasks();
}

function editTaskController(input) {
  const editTaskTitle = document.querySelector("#edit-task-title");
  const editTaskStartDate = document.querySelector("#edit-task-start-date");
  const editTaskStartTime = document.querySelector("#edit-task-start-time");
  const editTaskEndDate = document.querySelector("#edit-task-end-date");
  const editTaskEndTime = document.querySelector("#edit-task-end-time");
  const editTaskDescription = document.querySelector("#edit-task-description");

  const id = Number(input.id);

  const task = {
    title: editTaskTitle.value,
    startDate: originalDate(editTaskStartDate.value),
    startTime: editTaskStartTime.value,
    endDate: originalDate(editTaskEndDate.value),
    endTime: editTaskEndTime.value,
    description: editTaskDescription.value,
  };

  new TaskService().editTask(id, task);

  attAllTasksStatus();
  showTasks();
}

function setIdTaskController(id) {
  new TaskService().setIdTask(id);
}

function removeIdTaskController() {
  new TaskService().removeIdTask();
}

function getAllTasksController() {
  let tasks = new TaskService().getLocalStorage();

  return tasks;
}

function setUserNameController() {
  const compliance = document.querySelector("#compliance-header");

  let name = new TaskService().getUserName();

  if (!name) {
    window.location.href = "index.html";
  } else {
    compliance.textContent = `Boa tarde ${name}`;
  }
}

function getTaskController(id) {
  const task = new TaskService().getTask(id);

  return task;
}

function editTaskStatusController(task) {
  const id = Number(task.id);
  const fetchedTask = getTaskController(id);

  let status = fetchedTask.status;
  if (status === "Realizada") {
    status = "Pendente";
  } else {
    status = "Realizada";
  }

  new TaskService().editTaskStatus(id, status);

  attAllTasksStatus();
  showTasks();
}

function editAllTasksStatusController(tasks) {
  new TaskService().editAllTasksStatus(tasks);

  showTasks();
}

function deleteTaskController(input) {
  const id = Number(input.id);

  new TaskService().deleteTask(id);

  attAllTasksStatus();
  showTasks();
}
