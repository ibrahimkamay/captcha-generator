//Dom elementlerini seçiyoruz.

const captchaTextBox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".button");


let captchaText = null;

//Captcha oluşturma fonksiyonunu yapıyoruz.

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    captchaTextBox.value = (randomString);
    console.log(randomStringArray);
}

generateCaptcha();