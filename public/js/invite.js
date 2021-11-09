let inputId = 3;
const inputEl = document.getElementById("input-participant");

document.getElementById("add").addEventListener("click", addParticipant);
document.getElementById("send").addEventListener("click", sendInvitation)


function addParticipant(event) {
  console.log("addParticipant")
  event.preventDefault();
  const newInput = document.createElement("div")
  newInput.innerHTML =`<div>Participant #${inputId}</div>
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
  </div>`
  inputEl.appendChild(newInput);
  inputId++;
};

async function sendInvitation(event) {
  event.preventDefault();//Should remove in production
  const inputEl = document.getElementById("input-participant");
  const inputList = inputEl.getElementsByTagName("input");
  
  let dataList = [];
  for (let i = 0; i < inputId ; i=i+2) {
    dataList.push({
      "name":inputList.item(i).value,
      "email":inputList.item(i+1).value,
      "event_id": 1, //should change to event id 
      "invitationDate": new Date()
    });
  } 

  const response = await fetch("/api/members/invite/1", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataList),
  })
  //TODO: Check response
  console.log(response)

};