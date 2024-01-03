const suspicious = () => {
    let text = document.getElementById("suspicious");
    let captcha = document.getElementById("sus");
    text.style.display = "block";
    captcha.style.display = "inline";
}

const loop = () => {
    grecaptcha.render(document.getElementById('sus'), {
        sitekey: '6LcY9kQpAAAAAFBsPVIK4tDINHrQmrQsbzudKbgm',
        theme: 'dark',
        callback: loop()
    })
}