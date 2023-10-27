document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const timeInput = document.getElementById("time");
    const setReminderButton = document.getElementById("set-reminder");
    const reminderList = document.getElementById("reminder-list");

    setReminderButton.addEventListener("click", function () {
        const task = taskInput.value;
        const time = timeInput.value;

        if (task && time) {
            const reminderTime = new Date(time).toLocaleString();

            const reminderItem = document.createElement("li");
            reminderItem.textContent = `Task: ${task}, Time: ${reminderTime}`;
            reminderList.appendChild(reminderItem);

            taskInput.value = "";
            timeInput.value = "";
        } else {
            alert("Please fill in both task and time fields.");
        }
    });
});
