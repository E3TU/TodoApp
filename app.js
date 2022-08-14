const form = document.querySelector("#taskform");
const input = document.querySelector("#taskinput");
const list = document.querySelector("#tasks");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
        return;
    }

    const taskelement = document.createElement("div");
    taskelement.classList.add("task");

    const taskcontent = document.createElement("div");
    taskcontent.classList.add("content");

    taskelement.appendChild(taskcontent);

    const taskinputelement = document.createElement("input");
    taskinputelement.classList.add("text");
    taskinputelement.type = "text";
    taskinputelement.value = task;
    taskinputelement.setAttribute("readonly", "readonly");

    taskcontent.appendChild(taskinputelement);

    const taskbuttons = document.createElement("div");
    taskbuttons.classList.add("buttons");

    const taskedit = document.createElement("button");
    taskedit.classList.add("edit");
    taskedit.innerHTML = '<i class="fa-solid fa-pen"></i>';

    const taskdelete = document.createElement("button");
    taskdelete.classList.add("delete");
    taskdelete.innerHTML = '<i class="fa-solid fa-trash"></i>';

    taskbuttons.appendChild(taskedit);
    taskbuttons.appendChild(taskdelete);

    taskelement.appendChild(taskbuttons);

    list.appendChild(taskelement);    

    list.appendChild(taskelement);

    input.value = "";

    taskedit.addEventListener('click', () => {
        if (taskedit.innerHTML.toLowerCase () == '<i class="fa-solid fa-pen"></i>'){
            taskinputelement.removeAttribute("readonly");
            taskinputelement.focus();
            taskedit.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else {
            taskinputelement.setAttribute("readonly", "readonly");
            taskedit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        }
    });

    taskdelete.addEventListener('click', () => {
        list.removeChild(taskelement);
    });
});
