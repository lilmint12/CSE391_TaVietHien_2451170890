const form =
    document.querySelector("#registerForm");

const nameInput =
    document.querySelector("#name");

const emailInput =
    document.querySelector("#email");

const passwordInput =
    document.querySelector("#password");

const confirmInput =
    document.querySelector("#confirmPassword");

const phoneInput =
    document.querySelector("#phone");

const submitBtn =
    document.querySelector("#submitBtn");
const validState = {
    name:false,
    email:false,
    password:false,
    confirm:false,
    phone:false
};
function validateName(){

    const value =
        nameInput.value.trim();

    const msg =
        document.querySelector("#nameMsg");

    if(
        value.length >= 2 &&
        value.length <= 50
    ){

        msg.textContent = "✅ Valid name";
        msg.className = "valid";

        validState.name = true;

    }else{

        msg.textContent =
            "❌ Name must be 2-50 characters";

        msg.className = "invalid";

        validState.name = false;
    }

    updateSubmit();
}

nameInput.addEventListener(
    "input",
    validateName
);
function validateEmail(){

    const email =
        emailInput.value.trim();

    const msg =
        document.querySelector("#emailMsg");

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)){

        msg.textContent =
            "✅ Valid email";

        msg.className = "valid";

        validState.email = true;

    }else{

        msg.textContent =
            "❌ Email format is invalid";

        msg.className = "invalid";

        validState.email = false;
    }

    updateSubmit();
}

emailInput.addEventListener(
    "input",
    validateEmail
);
function validatePassword(){

    const password =
        passwordInput.value;

    const msg =
        document.querySelector("#passwordMsg");

    const bar =
        document.querySelector("#strengthBar");

    let strength = 0;

    if(password.length >= 8)
        strength++;

    if(/[a-zA-Z]/.test(password) &&
       /\d/.test(password))
        strength++;

    if(
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[^A-Za-z0-9]/.test(password)
    )
        strength++;

    if(strength === 0){

        bar.style.width = "20%";
        bar.style.background = "red";

        msg.textContent = "Weak";
        validState.password = false;
    }

    if(strength === 1){

        bar.style.width = "40%";
        bar.style.background = "red";

        msg.textContent = "Weak";
        validState.password = false;
    }

    if(strength === 2){

        bar.style.width = "70%";
        bar.style.background = "orange";

        msg.textContent = "Medium";
        validState.password = true;
    }

    if(strength === 3){

        bar.style.width = "100%";
        bar.style.background = "green";

        msg.textContent = "Strong";
        validState.password = true;
    }

    validateConfirm();
    updateSubmit();
}

passwordInput.addEventListener(
    "input",
    validatePassword
);
function validateConfirm(){

    const msg =
        document.querySelector("#confirmMsg");

    if(
        confirmInput.value &&
        confirmInput.value ===
        passwordInput.value
    ){

        msg.textContent =
            "✅ Password matched";

        msg.className = "valid";

        validState.confirm = true;

    }else{

        msg.textContent =
            "❌ Password does not match";

        msg.className = "invalid";

        validState.confirm = false;
    }

    updateSubmit();
}

confirmInput.addEventListener(
    "input",
    validateConfirm
);
function validatePhone(){

    let digits =
        phoneInput.value.replace(/\D/g,"");

    digits =
        digits.substring(0,10);

    if(digits.length > 4){
        digits =
            digits.slice(0,4)
            + "-"
            + digits.slice(4);
    }

    if(digits.length > 8){
        digits =
            digits.slice(0,8)
            + "-"
            + digits.slice(8);
    }

    phoneInput.value = digits;

    const pureDigits =
        digits.replace(/-/g,"");

    const msg =
        document.querySelector("#phoneMsg");

    if(pureDigits.length === 10){

        msg.textContent =
            "✅ Valid phone";

        msg.className = "valid";

        validState.phone = true;

    }else{

        msg.textContent =
            "❌ Phone must contain 10 digits";

        msg.className = "invalid";

        validState.phone = false;
    }

    updateSubmit();
}

phoneInput.addEventListener(
    "input",
    validatePhone
);
function updateSubmit(){

    submitBtn.disabled =
        !Object.values(validState)
        .every(Boolean);
}
function updateSubmit(){

    submitBtn.disabled =
        !Object.values(validState)
        .every(Boolean);
}
form.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        const overlay =
            document.createElement("div");

        overlay.className =
            "modal-overlay";

        overlay.innerHTML = `
        <div class="modal">

            <h2>
                Đăng ký thành công!
            </h2>

            <p>
                Name:
                ${nameInput.value}
            </p>

            <p>
                Email:
                ${emailInput.value}
            </p>

            <p>
                Phone:
                ${phoneInput.value}
            </p>

            <button id="closeModal">
                Close
            </button>

        </div>
        `;

        document.body.appendChild(
            overlay
        );

        overlay.addEventListener(
            "click",
            e => {

                if(
                    e.target === overlay ||
                    e.target.id ===
                    "closeModal"
                ){

                    overlay.remove();
                }
            }
        );
    }
);