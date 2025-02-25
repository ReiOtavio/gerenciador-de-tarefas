let taskId = 1;

function allowDrop(event) {
    event.preventDefault();
    event.target.classList.add("dragover");
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let task = document.getElementById(data);
    event.target.classList.remove("dragover");

    if (event.target.classList.contains("column")) {
        event.target.appendChild(task);
        updateCounts();
    }
}

function addTask() {
    let taskName = document.getElementById("task-name").value.trim();
    if (taskName === "") {
        alert("Digite um nome para a tarefa!");
        return;
    }

    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.draggable = true;
    newTask.id = "task" + taskId++;
    newTask.textContent = taskName;
    newTask.ondragstart = drag;

    document.getElementById("todo").appendChild(newTask);
    document.getElementById("task-name").value = "";

    updateCounts();
}

function updateCounts() {
    document.getElementById("count-todo").textContent = `(${document.getElementById("todo").children.length - 1})`;
    document.getElementById("count-inProgress").textContent = `(${document.getElementById("inProgress").children.length - 1})`;
    document.getElementById("count-done").textContent = `(${document.getElementById("done").children.length - 1})`;
}

updateCounts();
