const buttonPlay = document.getElementById("buttonPlayLottery");
const divAnimation = document.getElementById("divAnimation");
const textAnimate = document.getElementById("textAnimate");
const divCongratulations = document.getElementById("divCongratulations");
const textDone = document.getElementById("textDone");
const buttonAllAreHere = document.getElementById("buttonAllAreHere");
const divMembers = document.getElementById("divMembers");
const divPlay = document.getElementById("divPlay");

let members = [];

const eventId = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

async function playLotteryHandler() {
  const response = await fetch(`/api/events/${eventId}`);
  const data = await response.json();

  if (data.members.length === 0) {
    alert("No members in this event");
    return;
  }

  members = [...data.members];

  showAnimation();
  const interval = setInterval(showText, 300);

  setTimeout(async function () {
    //Call Api
    const response = await fetch(`/api/events/shuffle/${eventId}`);
    const data = await response.json();
    console.log("Lottery", data.members);

    hideAnimation();
    clearInterval(interval);
  }, 8000);
}

function showAnimation() {
  divAnimation.classList.remove("hide-element");
  divAnimation.classList.add("show-element-flex");
  buttonPlay.classList.add("hide-element");
}

function hideAnimation() {
  divAnimation.classList.add("hide-element");
  divAnimation.classList.remove("show-element-flex");
  //Show Congratulations Div
  divCongratulations.classList.remove("hide-element");
  divCongratulations.classList.add("show-element-flex");
  textDone.classList.add("animate__animated", "animate__fadeIn");
}

function showText() {
  const max = members.length;
  textAnimate.innerHTML = `${members[Math.floor(Math.random() * max)].name}`;
}

buttonPlay.addEventListener("click", playLotteryHandler);

buttonAllAreHere.addEventListener("click", () => {
  divMembers.classList.add("hide-element");
  divPlay.classList.remove("hide-element");
});
