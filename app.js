//Selecting necessary DOM elements
const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".button");

// Variable to store generated captcha
let captchaText = null;

// Function to generate captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map(char => Math.random()> 0.5 ? char.toUpperCase() : char);
    captchaText = changeString.join(" ")
    console.log(captchaText);

    captchaTextBox.value = (captchaText);
}

// addEventListener for the refresh button, captchaInputBox, submit
const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}   

// Toggle submit button disable class based on captcha input field
const captchaKeyUpValidate = () => {
    //Toggle submit button disable class based on captcha input field.
    submitBtn.classList.toggle("disabled", !captchaInputBox.value)
    if (!captchaInputBox.value) message.classList.remove("active");

}

const submitBtnClick = () => {
    captchaText = captchaText.split("").filter((char => char !== " ")).join(""); 
    message.classList.add("active");
    if (captchaInputBox.value === captchaText) {
        message.innerText = "Entered captcha is correct"
        message.style.color = "#826afb"

    } else {
        message.innerText = "Entered captcha is not correct"
        message.style.color = "#ff2525"
    }
};

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate)
submitBtn.addEventListener("click",  submitBtnClick   )

//generate a captcha when the page loads
generateCaptcha();