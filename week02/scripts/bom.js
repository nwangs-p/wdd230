const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('#list');

buttonElement.addEventListener('click', () => {
    // Check if input is not empty
    if (inputElement.value.trim() !== '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
  
      li.textContent = inputElement.value;
      deleteButton.textContent = 'X';
      li.appendChild(deleteButton);
  
      deleteButton.addEventListener('click', () => {
        listElement.removeChild(li);
        inputElement.focus();
      });
  
      listElement.appendChild(li);
  
      // Clear the input field
      inputElement.value = '';
    }
  });


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});