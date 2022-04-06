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
    taskedit.innerHTML = "Edit";

    const taskdelete = document.createElement("button");
    taskdelete.classList.add("delete");
    taskdelete.innerHTML = "Delete";

    taskbuttons.appendChild(taskedit);
    taskbuttons.appendChild(taskdelete);

    taskelement.appendChild(taskbuttons);

    list.appendChild(taskelement);    

    list.appendChild(taskelement);

    input.value = "";

    taskedit.addEventListener('click', () => {
        if (taskedit.innerText.toLowerCase () == "edit"){
            taskinputelement.removeAttribute("readonly");
            taskinputelement.focus();
            taskedit.innerText = "Save";
        } else {
            taskinputelement.setAttribute("readonly", "readonly");
            taskedit.innerText = "Edit"
        }
    });

    taskdelete.addEventListener('click', () => {
        list.removeChild(taskelement);
    });
});