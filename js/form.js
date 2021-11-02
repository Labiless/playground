initForm = () => {
    let form = document.getElementById("form");
    form.onsubmit = () => {
        return checkForm(form);
    }
}

checkForm = (form) => {
    let inputs = form.children;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("name")) {
            switch (inputs[i].getAttribute("name")) {
                case "name":
                    if(!checkName(inputs[i].value)){
                        return formError(inputs[i]);
                    }
                    break;
                case "last-name":
                    if(!checkName(inputs[i].value)){
                        return formError(inputs[i]);
                    }
                    break;
                case "email":
                    if(!checkEmail(inputs[i].value)){
                        return formError(inputs[i]);
                    }
                    break;
                case "message":
                    if(!checkMessage(inputs[i].value)){
                        return formError(inputs[i]);
                    }
                    break;
            }
        }
    }
    return true;
}
checkName = (name) => {
    let regex = /^[A-Za-z]{0,20}$/;
    return regex.test(name);
}
checkEmail = (email) => {
    let regex = /^[A-Za-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return regex.test(email);
}
checkMessage = (text) => {
    let regex = /^[A-Za-z0-9.,\s]{1,150}$/;
    return regex.test(text);
}
formError = (element) => {
    element.classList.add("form-input-error");
    setTimeout(() => {
        element.classList.remove("form-input-error");
    }, 500);
    let errorText = document.getElementsByClassName("form-error")[0];
    errorText.innerText = "Rispetta il formato richiesto: " + element.getAttribute("data-error-message")
    return false;
}