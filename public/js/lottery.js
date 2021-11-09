const buttonPlay = document.getElementById("buttonPlayLottery");
const divAnimation = document.getElementById("divAnimation");
const textAnimate = document.getElementById("textAnimate");

function playLotteryHandler() {
  const randomNumber = Math.floor(Math.random() * 100);
  showAnimation();
  const interval = setInterval(showText, 400);

  setTimeout(function () {
    //Call Api
    alert(`You have won ${randomNumber}`);
    hideAnimation();
    clearInterval(interval);
  }, 5000);
}

function showAnimation() {
  divAnimation.classList.remove("hide-element");
  divAnimation.classList.add("show-element-flex");
  buttonPlay.classList.add("hide-element");
}

function hideAnimation() {
  divAnimation.classList.add("hide-element");
  divAnimation.classList.remove("show-element-flex");
}

function showText() {
  const members = [
    {
      name: "jose",
    },
    {
      name: "Antonio",
    },
    {
      name: "Sivan",
    },
    {
      name: "Gocku",
    },
  ];

  const max = members.length;
  textAnimate.innerHTML = `Working with ${
    members[Math.floor(Math.random() * max)].name
  }`;
}

buttonPlay.addEventListener("click", playLotteryHandler);
