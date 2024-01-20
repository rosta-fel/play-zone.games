const socket = io();

const activity = document.querySelector('.activity');
const message = document.getElementById('message');

function sendMessage(e) {
    e.preventDefault();
    if (message.value) {
        socket.emit('message', message.value)
        message.value = "";
    }

    message.focus();
}

document.getElementById('chat-form').addEventListener('submit', sendMessage);

socket.addEventListener("message", message => {
    activity.textContent = "";
    const li = document.createElement('li');
    li.textContent = message;
    document.getElementById("messages").appendChild(li);
});

message.addEventListener('keypress', () => {
    socket.emit('activity', socket.id.substring(0, 5));
});

let activityTimer;
socket.on("activity", (name) => {
    activity.textContent = `${name} is typing...`

    // Clear after 3 seconds
    clearTimeout(activityTimer)
    activityTimer = setTimeout(() => {
        activity.textContent = "";
    }, 3000);
});