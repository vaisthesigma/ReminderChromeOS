document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const completedTaskList = document.getElementById("completed-task-list");

    addTaskButton.addEventListener("click", function () {
        const task = taskInput.value;

        if (task) {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);

            taskItem.addEventListener("click", function () {
                if (!taskItem.classList.contains("completed")) {
                    taskItem.classList.add("completed");
                    completedTaskList.appendChild(taskItem);
                } else {
                    taskItem.classList.remove("completed");
                    taskList.appendChild(taskItem);
                }
            });

            taskInput.value = "";
        }
    });
});
