async function loginformHandle(event) {
  event.preventDefault();

  const event_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    //Call the api
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      showAlertMessage();
    }
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
