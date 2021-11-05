async function loginformHandle(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email,
    password,
    firstName,
    lastName,
  };

  console.log(data);

  //Call the api
  const response = await fetch("/api/users/create-owner", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    document.location.replace("/");
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
