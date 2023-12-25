window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const taskForm = document.querySelector("#taskform");
  const input = document.querySelector("#taskinput");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = {
      content: input.value,
    };

    if (!task.content) {
      alert("You cant add empty task!");
      return;
    }

    todos.push(task);

    localStorage.setItem("todos", JSON.stringify(todos));

    // Reset the form
    e.target.reset();

    renderTodos();
  });

  renderTodos();
});

function renderTodos() {
  const taskList = document.querySelector(".tasklist");
  taskList.innerHTML = "";
  const header = document.createElement("h2");
  header.innerHTML = "Tasks";
  taskList.appendChild(header);

  todos.forEach((todo) => {
    const task = document.createElement("div");

    task.classList.add("task");

    const content = document.createElement("div");
    const input = document.createElement("input");
    const buttons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    content.appendChild(input);

    content.classList.add("content");
    buttons.classList.add("buttons");
    editButton.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input class="text" type="text" value="${todo.content}" readonly>`;
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    content.appendChild(buttons);
    task.appendChild(content);
    taskList.appendChild(task);

    editButton.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      editButton.innerHTML = '<i class="fa-solid fa-check"></i>';

      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      header.innerHTML = "";
      renderTodos();
    });
  });

  if(todos.length === 0) {
    taskList.style.display = "none";
  } else{
    taskList.style.display = "block";
  }
}
