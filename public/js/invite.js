let inputId = 3;
const inputEl = document.getElementById("input-participant");

document.getElementById("add").addEventListener("click", addParticipant);
document.getElementById("send").addEventListener("click", sendInvitation);

const event_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

function addParticipant(event) {
  console.log("addParticipant");
  event.preventDefault();
  const newInput = document.createElement("div");
  newInput.innerHTML = `<div>Participant #${inputId}</div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control my-input"
      id="name${inputId}"
      placeholder="Name"
      required
    />
    <label for="name${inputId}">Name</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control my-input"
      id="email${inputId}"
      placeholder="name@example.com"
      required
    />
    <label for="email${inputId}">Email address</label>
  </div>`;
  inputEl.appendChild(newInput);
  inputId++;
}

async function sendInvitation(event) {
  event.preventDefault(); //Should remove in production
  const inputEl = document.getElementById("input-participant");
  const inputList = inputEl.getElementsByTagName("input");

  let dataList = [];
  for (let i = 0; i < inputList.length; i = i + 2) {
    dataList.push({
      name: inputList.item(i).value,
      email: inputList.item(i + 1).value,
      event_id: event_id,
      invitationDate: new Date(),
    });
  }

  const response = await fetch(`/api/members/invite/${event_id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataList),
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    showAlertMessage(response.statusText);
  }
}
