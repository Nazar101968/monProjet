window.onload = function () {
  function JankenRobot() {
    var choices = ["rock", "paper", "cisor"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function ShowJankenChoice(choice) {
    var contener = document.querySelector("main");
    var figure = document.createElement("figure");
    var img = document.createElement("img");

    img.src = "./img/" + choice + ".png";
    figure.appendChild(img);
    contener.appendChild(figure);

    figure.style.opacity = 1;
    figure.style.position = "fixed";
    figure.style.top = "30%";
    figure.style.right = "20%";
    return figure;
  }

  function hideShowImg(hide = true) {
    var img = document.querySelectorAll("figure");

    for (var i = 0; i < img.length; i++) {
      if (hide) img[i].style.opacity = 0;
      else img[i].style.opacity = 1;
    }
  }

  function animateSelection(figureObject) {
    hideShowImg();
    figureObject.style.opacity = 1;
    figureObject.style.position = "fixed";
    figureObject.style.top = "30%";
    figureObject.style.left = "20%";
  }

  function resetGame(generatedImg, selectedImg) {
    generatedImg.remove();
    selectedImg.style.position = "initial";
    hideShowImg(false);
  }

  // 20min step 1 add a click event to all figure elements, just one click event to rule them all ! after that create a function named play and call her in your event
  var elements = document.getElementsByTagName("figure");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", play);
    // console.log(elements[i]);
  }
  // 10min step 2  inside your play function --> get the data-choice attribute value of the clicked elements and call the robot function for get his choice
  function play(event) {
    // console.log(event.target);
    var data = event.target.getAttribute("data-choice");
    // console.log(data);
    var robotData = JankenRobot();
    // console.log(robotData);
    // 15min step 3 --> call the functions for animations

    animateSelection(event.target.parentNode);
    var generatedImg = ShowJankenChoice(robotData);
    console.log(event.target.parentNode);

    // 35min step 4 --> create a function that checks the choice made by the robot and the player, then displays the result in an alert. Call this function after 1 secondes of delay
    setTimeout(function () {
      checkWin(data, robotData);
      // 10min step 5 --> call the reset game function with the good parameters
      resetGame(generatedImg, event.target.parentNode);
    }, 1000);
  }

  function checkWin(joueur, robot) {
    if (joueur == robot) {
      alert("egaliter");
    } else if (
      (joueur == "cisor" && robot == "cisor") ||
      (joueur == "cisor" && robot == "paper") ||
      (joueur == "paper" && robot == "rock")
    ) {
      alert("victoire");
    } else {
      alert("defaite losssseerrrrrrS");
    }

    // alert.window('win')
  }
};
