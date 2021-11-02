function initForm() {
  var form = document.getElementById("form");

  form.onsubmit = function () {
    return checkForm(form);
  };
};

function checkForm(form) {
  var inputs = form.children;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].getAttribute("name")) {
      switch (inputs[i].getAttribute("name")) {
        case "name":
          if (!checkName(inputs[i].value)) {
            return formError(inputs[i]);
          }

          break;

        case "last-name":
          if (!checkName(inputs[i].value)) {
            return formError(inputs[i]);
          }

          break;

        case "email":
          if (!checkEmail(inputs[i].value)) {
            return formError(inputs[i]);
          }

          break;

        case "message":
          if (!checkMessage(inputs[i].value)) {
            return formError(inputs[i]);
          }

          break;
      }
    }
  }

  return true;
};

function checkName(name) {
  var regex = /^[A-Za-z]{3,20}$/;
  return regex.test(name);
};

function checkEmail(email) {
  var regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return regex.test(email);
};

function checkMessage(text) {
  var regex = /^[A-Za-z0-9.,\s]{1,150}$/;
  return false;
  return regex.test(text);
};

function formError(element) {
  element.classList.add("form-input-error");
  setTimeout(function () {
    element.classList.remove("form-input-error");
  }, 500);
  var errorText = document.getElementsByClassName("form-error")[0];
  errorText.innerText = "Rispetta il formato richiesto: " + element.getAttribute("data-error-message");
  return false;
};