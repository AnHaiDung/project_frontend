const registerForm = document.querySelector("#register-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

const registerErrors = {
    name: document.querySelector("#name-error"),
    email: document.querySelector("#email-error"),
    password: document.querySelector("#password-error"),
    confirmPassword: document.querySelector("#confirm-password-error"),
};

registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;
    const registerSubmit = [
        { 
            input: nameInput, 
            error: registerErrors.name, 
            message: "Họ và tên không được để trống" 
        },
        { 
            input: emailInput, 
            error: registerErrors.email, 
            message: "Email không được để trống", 
            validate: function(value) { 
                return value.includes("@") || "Email không hợp lệ"; 
            }
        },
        { 
            input: passwordInput, 
            error: registerErrors.password, 
            message: "Mật khẩu phải có ít nhất 8 ký tự", 
            validate: function(value) { 
                return value.length >= 8; 
            }
        },
        { 
            input: confirmPasswordInput, 
            error: registerErrors.confirmPassword, 
            message: "Mật khẩu xác nhận không khớp", 
            validate: function(value) { 
                return value === passwordInput.value; 
            }
        }
    ];
    
    registerSubmit.forEach(function(submit) {
        submit.error.innerText = ""; 
        const value = submit.input.value.trim(); 
        if (!value) {
            submit.error.innerText = submit.message;
            isValid = false;
        } else if (submit.validate) {
            let validationResult = submit.validate(value);
            if (validationResult !== true) {
                submit.error.innerText = validationResult;
                isValid = false;
            }
        }
    });

    if (isValid) {
        const user = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };
        
        localStorage.setItem("user", JSON.stringify(user));
    }
});