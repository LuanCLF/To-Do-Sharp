function modalEditTasks(task) {
  const id = Number(task.id);
  const fetchedTask = getTaskController(id);

  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.tabIndex = -1;
  modal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        
        <div class="modal-body text-break">
        <form class="container-sm text-center">
        <h1 class="mb-5">Gerenciador de tarefas</h1>
        <div class="row mb-3">
          <div class="form-floating col-12">
            <input
              type="text"
              id="edit-task-title"
              class="form-control"
              placeholder="Tarefa"
             value="${fetchedTask.title}"
            />
            <label for="edit-task-title" class="form-label mx-2"
              >Tarefa</label
            >
          </div>
        </div>

        <div class="row mb-3">
          <div class="form-floating col-sm">
            <input
              id="edit-task-start-date"
              class="form-control"
              onfocus="type='date'"
              onblur="handleBlur(event)"
              placeholder="Data de início"
              value="${fetchedTask.startDate}"
            />
            <label for="edit-task-start-date" class="form-label mx-2"
              >Data início</label
            >
          </div>
          <div class="form-floating col-sm">
            <input
              type="text"
              id="edit-task-start-time"
              class="form-control"
              onfocus="type='time'"
              onblur="type='text'"
              placeholder="Data de início"
              value="${fetchedTask.startTime}"
            />
            <label for="edit-task-start-time" class="form-label mx-2"
              >Hora início</label
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="form-floating col-sm">
            <input
              class="form-control"
              id="edit-task-end-date"
              onfocus="type='date'"
              onblur="handleBlur(event)"
              placeholder="Acaba"
              value="${fetchedTask.endDate}"
            />
            <label for="edit-task-end-date" class="form-label mx-2"
              >Data término</label
            >
          </div>
          <div class="form-floating col-sm">
            <input
              type="text"
              class="form-control"
              id="edit-task-end-time"
              onfocus="type='time'"
              onblur="type='text'"
              placeholder="Acaba"
              value="${fetchedTask.endTime}"
            />
            <label for="edit-task-end-time" class="form-label mx-2"
              >Hora término</label
            >
          </div>
        </div>
        <div class="row mb-3">
          <div class="form-floating col-12">
            <input
              id="edit-task-description"
              type="text"
              class="form-control"
              placeholder="Descrição"
              value="${fetchedTask.description}"
            />
            <label for="edit-task-description" class="form-label mx-2"
              >Descrição</label
            >
          </div>
        </div>
      </form>

        </div>
        <div class="modal-footer">
          <button id="${id}" type="submit" class="btn btn-primary" data-bs-dismiss="modal" onclick="editTaskController(this)">Alterar tarefa</button>
          <button id="${id}" type="submit" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteTaskController(this)")>Excluir tarefa</button>
          <button id="${id}" type="submit" class="btn btn-success" data-bs-dismiss="modal" onclick="editTaskStatusController(this)")>Marcar como realizada</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const myModal = new bootstrap.Modal(modal);
  myModal.show();
}
