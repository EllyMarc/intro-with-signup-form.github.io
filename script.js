const form = document.getElementById("form")
const fistname = document.getElementById("fistname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    checkForm();

    alert("formulário enviado")

})

function checkInputFistName () {
    const fistnameValue = fistname.value;

    if(fistnameValue === "") {
        errorInput(fistname, "Fist name cannot be empty")
    }else{
        const formItem = fistname.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputLastName () {
    const lastnameValue = lastname.value;

    if(lastnameValue === "") {
        errorInput(lastname, "Last name cannot be empty")
    }else{
        const formItem = lastname.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail () {
    const emailValue = email.value;

    if(emailValue === "") {
        errorInput(email, "Looks like this is not an email")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPassword () {
    const passwordValue = password.value;

    if(passwordValue === "") {
        errorInput(password, "Password cannot be empty")
    }else if(passwordValue.length < 8){
        errorInput(password, "Short password. Minimum 8 characters")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm(){
    checkInputFistName ();
    checkInputLastName ();
    checkInputEmail ();
    checkInputPassword ();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        btn.textContent = 'Tudo certo';
        btn.classList.add('success');
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}