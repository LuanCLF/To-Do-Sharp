const sectionTableTasks = document.querySelector("#section-list-tasks");
const tBody = document.querySelector("#table-tasks-tbody");

function showTasks() {
  let tasks = getAllTasksController();
  console.log("show", tasks);
  if (tasks.length === 0) {
    sectionTableTasks.classList.remove("d-flex");
    sectionTableTasks.classList.add("d-none");
  } else {
    sectionTableTasks.classList.remove("d-none");
    sectionTableTasks.classList.add("d-flex");

    tBody.innerHTML = "";
    tasks.forEach((task, index) => {
      const startDate = reverseDate(task.startDate);
      const endDate = reverseDate(task.endDate);
      const classStatus = getClassStatus(task.status);

      tBody.innerHTML += `
      <tr class="table-tasks-row" >
      <td id="${index}" class="text-break" onclick="showTaskDescription(this)">${task.title}</td>
      <td>${startDate} às ${task.startTime}</td>
      <td>${endDate} às ${task.endTime}</td>
      <td class="${classStatus} task-status">${task.status}</td>
      <td>
        <button id="${index}" type="button" class="btn btn-warning" onclick="modalEditTasks(this)">Alterar</button>
      </td>`;
    });
  }
}

window.onload = () => {
  setUserNameController();
  attAllTasksStatus();
  showTasks();
};
