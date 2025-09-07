// Variable declaration for form message was missing
const formMessage = document.getElementById('form-message');

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list'); // Corrected typo here

addTaskBtn.addEventListener('click', function() {

    // Corrected typo in const
    const taskText = newTaskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Corrected typo in createElement
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.className = 'remove-task-btn';

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
    
        taskList.appendChild(li);

        newTaskInput.value = '';

        removeBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});

// Corrected typo in function parameter name
function showError(message) {
    formMessage.textContent = message;
    formMessage.style.display = 'block';
}

function clearError() {
    formMessage.textContent = '';
    formMessage.style.display = 'none';
}

function isValidEmail(email) {
    // Corrected typo in variable name
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', function(event) {
    // Corrected typo in preventDefault
    event.preventDefault();
    
    // Call clearError() at the start of the function
    clearError();

    if (nameInput.value.trim() === '') {
        showError('Please enter your name.'); // Use showError() instead of alert()
    } else if (emailInput.value.trim() === '') {
        showError('Please enter your email address.'); // Use showError() instead of alert()
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError('Please enter a valid email address.'); // Use showError() instead of alert()
    } else {
        alert('Form submitted successfully!');
    }
});