async function createEventHandler(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    budget: document.getElementById("budget").value,
    lottery_date: document.getElementById("lottery_date").value,
    party_date: document.getElementById("party_date").value,
  };

  //Call the api
  const response = await fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const { id } = await response.json();
    document.location.replace(`/invite-to-event/${id}`);
  } else {
    showAlertMessage(response.statusText);
  }
}

document.querySelector(".form").addEventListener("submit", createEventHandler);
