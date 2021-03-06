async function loginformHandle(event) {
  event.preventDefault();

  const first_name = document.getElementById("firstName").value;
  const last_name = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email,
    password,
    first_name,
    last_name,
  };

  if (!validateEmail(data.email)) {
    showAlertMessage("Please enter a valid email address");
    return;
  }

  //Call the api
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {

    document.location.replace("/create-event");

  } else {
    showAlertMessage(response.statusText);
  }
}

function showAlertMessage(message) {
  const alert = document.querySelector(".alert");
  const spanText = document.querySelector(".alert-text");

  spanText.innerText = message;
  alert.style.display = "block";
}

function hideAlertMessage() {
  const alert = document.querySelector(".alert");
  alert.style.display = "none";
}

document.querySelector(".form").addEventListener("submit", loginformHandle);
document.getElementById("email").addEventListener("input", hideAlertMessage);
document.getElementById("password").addEventListener("input", hideAlertMessage);
document
  .getElementById("firstName")
  .addEventListener("input", hideAlertMessage);
document.getElementById("lastName").addEventListener("input", hideAlertMessage);
