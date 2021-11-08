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

  console.log(data);

  //Call the api
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    document.location.replace("/"); //TODO: After creating account we should create event
  } else {
    showAlertMessage();
  }
}

function showAlertMessage() {
  const alert = document.querySelector(".alert");
  const spanText = document.querySelector(".alert-text");

  spanText.innerText = "Invalid email or password";
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
