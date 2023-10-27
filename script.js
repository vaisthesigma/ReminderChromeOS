/* script.js */
function setReminder() {
    const task = document.getElementById("task").value;
    const time = document.getElementById("time").value;

    if (task && time) {
        const reminderTime = new Date(time).getTime();
        const currentTime = new Date().getTime();
        const timeUntilReminder = reminderTime - currentTime;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                alert(`Reminder: ${task}`);
            }, timeUntilReminder);
        } else {
            alert("Please choose a future time for your reminder.");
        }
    } else {
        alert("Please fill in both task and time fields.");
    }
}
