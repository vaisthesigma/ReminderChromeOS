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
            const currentTime = new Date();
            
            if (currentTime < new Date(time)) {
                const reminderItem = document.createElement("li");
                reminderItem.textContent = `Task: ${task}, Time: ${reminderTime}`;
                reminderList.appendChild(reminderItem);

                // Play a beep sound
                const beep = new Audio("beep.wav");
                beep.play();

                // Show a push notification
                if (Notification.permission === "granted") {
                    const notification = new Notification("Reminder", {
                        body: `Task: ${task}`,
                    });
                }
            } else {
                alert("Please choose a future time for your reminder.");
            }

            taskInput.value = "";
            timeInput.value = "";
        } else {
            alert("Please fill in both task and time fields.");
        }
    });
});
