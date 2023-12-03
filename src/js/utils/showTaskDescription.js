function showTaskDescription(task) {
  const id = Number(task.id);
  const fetchedTask = getTaskController(id);
  const fetchedTaskDescription = fetchedTask.description;

  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.tabIndex = -1;
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${fetchedTask.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-break">
          <p>${fetchedTaskDescription}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const myModal = new bootstrap.Modal(modal);
  myModal.show();
}
