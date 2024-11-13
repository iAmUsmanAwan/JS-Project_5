const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const maxTasks = 10;   // Maximum number of tasks allowed

function addTask() {   //? Function to add a new task to the list
    const taskText = taskInput.value.trim();   // Trim leading and trailing spaces
    if (taskText && taskList.childElementCount < maxTasks) {  // Check if task text is not empty and list has not reached max tasks
        const taskItem = document.createElement('li');
        taskItem.className = 'task';  // Add class to task item for styling purposes
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">x</button>
        `;   // Add task text and remove button to task item
        taskList.appendChild(taskItem);  // Add task item to list
        taskInput.value = '';  // Clear input field
    } else if (taskList.childElementCount >= maxTasks) {
        alert('Task limit reached! Please remove a task before adding a new task. Thanks.');  //? Alert if max tasks reached
    }
}

//? Add event listener for Enter key press which enables adding a new task when Enter is pressed
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function removeTask(button) {
    button.parentElement.remove();
}