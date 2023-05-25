document.addEventListener("DOMContentLoaded", ()=>{
  var contactSection = document.getElementById('contact');
  var submitButton = contactSection.getElementsByTagName('button')[0];
  submitButton.addEventListener('click', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    var nameInput = contactSection.querySelector("input[name=name]");
    var emailInput = contactSection.querySelector("input[name=email]");
    var messageInput = contactSection.querySelector("textarea[name=message]");
    alert(`Datos: ${nameInput.value}, ${emailInput.value}, ${messageInput.value} `);
  });
});
