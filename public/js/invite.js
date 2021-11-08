let inputId = 3;

document.getElementById("add").addEventListener("click", addParticipant);



function addParticipant() {
  event.preventDefault();
  const inputEl = document.getElementById("input-participant");
  
  newInput=`<div>Participant #${inputId}</div>
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
  inputEl.innerHTML += newInput;
  inputId++;
}