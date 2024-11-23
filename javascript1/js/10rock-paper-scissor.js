let show = JSON.parse(localStorage.getItem("show")) || {
  win: 0,
  loss: 0,
  tie: 0,
};
updateScoreElement();
updateResult();

console.log(JSON.parse(localStorage.getItem("show")));
function computeNo() {
  const radomNo = Math.random();
  let computerNo = "";
  if (radomNo >= 0 && radomNo <= 1 / 3) {
    computerNo = "rock";
  } else if (radomNo >= 1 / 3 && radomNo <= 2 / 3) {
    computerNo = "paper";
  } else if (radomNo >= 2 / 3 && radomNo <= 1) {
    computerNo = "scissor";
  }
  updateResult2(computerNo);
  return computerNo;
}
//const computerNo = computeNo();
function calculateResult(cal) {
  let result = "";
  const computerNo = computeNo();

  if (cal === "scissor") {
    if (computerNo === "rock") {
      result = "You lose";
    } else if (computerNo === "paper") {
      result = "You win";
    } else if (computerNo === "scissor") {
      result = "Tie";
    }
  } else if (cal === "paper") {
    if (computerNo === "rock") {
      result = "You win";
    } else if (computerNo === "paper") {
      result = "Tie";
    } else if (computerNo === "scissor") {
      result = "You lose";
    }
    //console.log(result);
  } else if (cal === "rock") {
    if (computerNo === "rock") {
      result = "Tie";
    } else if (computerNo === "paper") {
      result = "You lose";
    } else if (computerNo === "scissor") {
      result = "You win";
    }
  }
  if (result === "You win") {
    show.win += 1;
  } else if (result === "You lose") {
    show.loss += 1;
  } else {
    show.tie += 1;
  }
  localStorage.setItem("show", JSON.stringify(show));
  updateScoreElement();
  console.log(result);
  updatemove(result);
  alert(`You chose ${cal} and Computer is ${computerNo} and ${result}
Win ${show.win}, Tie ${show.tie}, Loss ${show.loss}`);
}
function updateScoreElement() {
  document.querySelector(
    ".js-btn"
  ).innerHTML = `Win ${show.win}, Tie ${show.tie}, Loss ${show.loss}`;
}
function updateResult(cal = "nothing yet") {
  document.querySelector(
    ".js-btn-result"
  ).innerHTML = `      You chose <img src="images/${cal}-emoji.png" alt="" class="move you-pick" />
`;
}
function updatemove(result) {
  document.querySelector(".js-btn-move").innerHTML = result;
}
function updateResult2(result) {
  document.querySelector(
    ".js-btn-result2"
  ).innerHTML = `      Computer chose <img src="images/${result}-emoji.png" alt="" class="move" />
`;
}
