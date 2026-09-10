let emailInvalid = document.getElementById("error_email");
let passInvalid = document.getElementById("error_password");
let userInvalid = document.getElementById("error_username");
let email = document.getElementById("email_input");
let pass = document.getElementById("pass_input");
let user = document.getElementById("user_input");
export default async function registerFetch() {
    const url = "http://localhost:5255/";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const userRegex = /^[0-9A-Za-z]{6,16}$/;
    let emailIsValid = emailRegex.test(email.value.toLowerCase().trim());
    let passIsValid = (pass.value.length > 5 && pass.value.length < 21);
    let userIsValid = userRegex.test(user.value);

    if (emailIsValid && passIsValid && userIsValid) {
        const response = await fetch(`${url}register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": user.value,
                "Email": email.value,
                "PasswordHash": pass.value
            })
        })
        if (response.ok) {
            window.location = "/MeuPrimeiroFront/login/login.html";
        } else if(response.status === 400){
            console.log(await response.json());
        }
            else {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
    else {
        if(!userIsValid){
            inputInvalid(userInvalid,user);
        }
        if(!emailIsValid){
            inputInvalid(emailInvalid,email);
        }
        if(!passIsValid){
            inputInvalid(passInvalid,pass);
        }
    }
}
function inputInvalid(warning, element) {
    warning.style.display = "inline";
    element.classList.replace("input_box","input_box_error");
}
function inputValid(warning, element) {
    warning.style.display = "none";
    element.classList.replace("input_box_error","input_box");
}
function registerButtonMouseIn(){
    loginButton.style.backgroundColor = "#63b5ff";
}
function registerButtonMouseOut(){
    loginButton.style.backgroundColor = "#0084f0";
}
async function register(event){
    event.preventDefault();
    await registerFetch();
}
function button_change() {
    if(email_input.value.length === 0) {
        inputValid(emailInvalid, email);
    }
    if(user_input.value.length === 0) {
        inputValid(userInvalid, user);
    }
    if(pass_input.value.length === 0) {
        inputValid(passInvalid, pass);
    }
    if(email_input.value.length > 0 && pass_input.value.length > 0 && user_input.value.length > 0){
        loginButton.style.backgroundColor = "#0085f2";
        loginButton.addEventListener("mouseover", registerButtonMouseIn);
        loginButton.style.cursor = "pointer";
        loginButton.addEventListener("mouseout", registerButtonMouseOut);
        loginButton.addEventListener("click", register);
    }
    else{
        loginButton.removeEventListener("mouseover", registerButtonMouseIn);
        loginButton.removeEventListener("mouseout", registerButtonMouseOut)
        loginButton.style.backgroundColor = "#acb1b5";
        loginButton.style.cursor = "";
        loginButton.removeEventListener("click", register);
    }
}

const loginButton = document.getElementById("login_button");
let email_input = document.getElementById("email_input");
let pass_input = document.getElementById("pass_input");
let user_input = document.getElementById("user_input");

email_input.addEventListener("input", button_change);
pass_input.addEventListener("input", button_change);
user_input.addEventListener("input", button_change);