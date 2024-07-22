function showhideEmail() {
  const emailElement = document.getElementById("email");
  const buttonElement = document.getElementById("toggleButton");

  if (emailElement.style.display === 'none') {
    emailElement.style.display = 'block';
    buttonElement.textContent = "Hide Email"; 
  } else {
    emailElement.style.display = 'none';
    buttonElement.textContent = "Show Email"; 
  }
}
