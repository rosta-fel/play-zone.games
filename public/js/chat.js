const socket = io();

const activity = document.querySelector('.activity');
const message = document.getElementById('message');
const messagesList = document.getElementById('messages');
const username = document.getElementsByClassName('logout-link')[0].innerText;

function sendMessage(e) {
    e.preventDefault();
    if (message.value) {
        socket.emit('message', {username: username, message: message.value, timestamp: Date.now()})
        message.value = "";
    }

    message.focus();
}

document.getElementById('chat-form').addEventListener('submit', sendMessage);

socket.on('message', (data) => {
    activity.textContent = "";

    const li = document.createElement('li');
    li.classList.add('p-3', 'rounded-lg');

    if (data.username === username) {
        li.classList.add('bg-tertiary', 'w-1/2', 'rounded-tr-none', 'ms-auto');
        li.setAttribute('xyz', 'small-100% origin-top-right');
    } else {
        li.classList.add('bg-azure', 'w-1/2', 'rounded-tl-none', 'xyz-in');
        li.setAttribute('xyz', 'small-100% origin-top-left');
    }

    li.innerHTML = `
        <div class="inline-flex items-center flex-wrap mini-sm:space-x-2">
            <h3 class="font-bold text-white text-xl">${data.username}</h3>
            <p class="text-sm text-gray-200">${formatDate(data.timestamp)}</p>
        </div>
        <p class="text-white">${data.message}</p>
    `;
    messagesList.appendChild(li);

    messagesList.scrollTop = messagesList.scrollHeight;
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

function formatDate(timestamp) {
    const date = new Date(timestamp);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}