const suspicious = () => {
    let text = document.getElementById("suspicious");
    let captcha = document.getElementById("sus");
    text.style.display = "block";
    captcha.style.display = "inline";
}

const challenge = () => {
    let challeng = document.getElementById("challenge-alpha")
    challeng.style.display = "inline"
}