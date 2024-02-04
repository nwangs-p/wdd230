const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");
const message =  document.querySelector('#form-msg');
const password = document.querySelector('#pwd');
const confirmPass = document.querySelector('#conPwd');

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

confirmPass.addEventListener("focusout", ()=>{
    if(password.value !== confirmPass.value){
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.display = "block";
        password.style.backgroundColor = ""
        password.value = "";
        confirmPass.value= "";
        password.focus();
    }else{
        message.style.display= "none";
        password.style.background = "#fff"
    }
});