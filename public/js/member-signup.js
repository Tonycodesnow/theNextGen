async function signupformHandle(event) {
    event.preventDefault();

    const first_name = document.querySelector("#firstName").value;
    const last_name = document.querySelector("#lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const event_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const data = {
        first_name,
        last_name,
        email,
        password,
        event_id
    };
    
    if (first_name && last_name && email && password && event_id) {
      //Call the api
        const response = await fetch("/api/users/member-signup", {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            document.location.replace("/dashboard");
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

document.querySelector(".form").addEventListener("submit", signupformHandle);
document.getElementById("email").addEventListener("input", hideAlertMessage);
document.getElementById("password").addEventListener("input", hideAlertMessage);
