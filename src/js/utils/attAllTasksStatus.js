function attAllTasksStatus() {
  const tasks = getAllTasksController();
  
  tasks.map((task) => {
    const startDate = new Date(
      originalDate(task.startDate) + " " + task.startTime
    );

    const endDate = new Date(originalDate(task.endDate) + " " + task.endTime);

    const currentDate = new Date();

    if (task.status !== "Realizada") {
      if (+currentDate <= +startDate) {
        task.status = "Pendente";
      } else if (+currentDate <= +endDate) {
        task.status = "Em andamento";
      } else {
        task.status = "Em atraso";
      }
    }
  });

  editAllTasksStatusController(tasks);

  return tasks;
}
