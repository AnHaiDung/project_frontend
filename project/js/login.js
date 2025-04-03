const loginForm = document.querySelector("#login-form");
const loginEmailInput = document.querySelector("#login-email");
const loginPasswordInput = document.querySelector("#login-password");

const loginErrors = {
    email: document.querySelector("#login-email-error"),
    password: document.querySelector("#login-password-error")
};

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();  
    let isValid = true;
    const checkUser = JSON.parse(localStorage.getItem("user"));
    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();
    if (!email) {
        loginErrors.email.innerText = "Email không được để trống";
        isValid = false;
    } else if (checkUser && checkUser.email !== email) {
        loginErrors.email.innerText = "Email không tồn tại";
        isValid = false;
    } else {
        loginErrors.email.innerText = "";
    }

    if (!password) {
        loginErrors.password.innerText = "Mật khẩu không được để trống";
        isValid = false;
    } else if (checkUser && checkUser.password !== password) {
        loginErrors.password.innerText = "Mật khẩu không chính xác";
        isValid = false;
    } else {
        loginErrors.password.innerText = "";
    }

    if (isValid) {
        window.location.href = "../pages/dashboard.html";
    }
});
