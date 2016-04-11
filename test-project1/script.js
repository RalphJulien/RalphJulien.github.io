"use strict"
jQuery(function() {
  console.log("Loaded");

  var mission_start = new Audio('audio/captain_commando.mp3');
  mission_start.play();
  mission_start.loop = true;

 var images = ['cityscape-metropolis.gif', 'cityscape-nyc.gif', 'detroit.gif', 'futuristic_city.gif', 'las_vegas.gif', 'philadelphia.gif', 'toronto.gif'];
 $('#box').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});




  var time = $('#box .pTimer');
  var humanScoreTag = $('#box .p1');
  var parasiteScoreTag = $('#box .p2');
  var wonMessage = $('#endMessageWon');
  var lostMessage = $('#endMessageLost');
  var laserSound = document.createElement('audio');
    laserSound.setAttribute('src', 'audio/Laser_Shoot1.wav');
    laserSound.setAttribute('autoplay', 'autoplay');
  time.hide();
  humanScoreTag.hide();
  parasiteScoreTag.hide();
  wonMessage.hide();
  lostMessage.hide();
  var checkHumanWin = function() {
    if (parasiteScore === 0) {
      wonMessage.show();
      humanScoreTag.hide();
      parasiteScoreTag.hide();
      clearTimeout(loadUpInterval);
      $('spore').remove();
      return 'win';

    } else {
      return 'keepPlaying';
    }
  };
  var checkParasiteWin = function() {
    if (humanScore === 0) {
      lostMessage.show();
      humanScoreTag.hide();
      parasiteScoreTag.hide();
      clearTimeout(loadUpInterval);
      $('spore').remove();
      return 'loss';
    } else {
      return 'keepPlaying';
    }
  };
  var parasiteScore;
  var humanScore;
  var bg = $("#box");
  var speedUp = 0;
  var changeSpeed = function() {
    var roll1 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    var roll2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    if (roll1 === roll2) {
      speedUp = roll1;
    } else {
      speedUp = 0;
    }
    return speedUp;
  }
  var startGame = function() {
      humanScore = 300;
      parasiteScore = 600;
    }
    //
  var increaseHumanScore = function() {
    humanScore = humanScore + 10;
    console.log("Humans Score: " + humanScore);
    humanScoreTag.text("HUMANS Score: " + humanScore);
  }
  var decreaseHumanScore = function() {
    humanScore = humanScore - 10;
    console.log("Humans Score: " + humanScore);
    humanScoreTag.text("HUMANS Score: " + humanScore);
  }
  var decreaseParasiteScore = function() {
      parasiteScore = parasiteScore - 5;
      console.log("SWARM Score: " + parasiteScore);
      parasiteScoreTag.text("SWARM Score: " + parasiteScore);
    }
    //
  var loadUp = function() {
      var spore = $('<div class="spore"></div>');

      //Create a <div> with the class "spore" named "spore"

      //Moves new spore to a random location



      var aSide;
      var bSide;
      var cSide;
      var speed = 12000 - changeSpeed();
      spore.appendTo(bg);
      var launchPoint = ((Math.random() * bg.width()));
      spore.css("left", launchPoint);
      var angle = Math.floor(Math.random() * (45 - 1 + 1) + 1);
      spore.css("transform", "rotate(" + angle + "deg)");
      var vector = function(ang, lp) {
          ang = ang - 180;
          aSide = 400;
          var x = function(ang) {
            return ang * Math.PI / 180;
          };
          cSide = 400 / Math.cos(x(ang));
          cSide = Math.abs(cSide);
          bSide = (aSide * aSide) - (cSide * cSide);
          bSide = Math.abs(bSide);
          bSide = Math.sqrt(bSide);
          return bSide + 300;
        }
        //
        //
      spore.animate({
        'left': +vector(angle, launchPoint) + 'px',
        'top': '+450px'
      }, speed);
      //launch spore end
      setTimeout(function() {
        //humanScoreTag.text("HUMAN RACE Score: " + humanScore);
        spore.toggleClass('infect');
        setTimeout(function() {

          $(this).toggleClass('infect');
          $(this).toggleClass('infect');
          setTimeout(function() {
            console.log("Wrecked!");
            spore.remove();
          }.bind($(this)), 10);
        }.bind($(this)), 250);
        decreaseHumanScore();
        checkParasiteWin();
        console.log("Parasites Score: " + parasiteScore);
      }, 11000);
      var burnTimer1 = setInterval(function() {
        spore.toggleClass('spore');
        spore.css("transform", "rotate(-" + 7 + "deg)");
      }, 250)
      var burnTimer2 = setInterval(function() {
          spore.css("transform", "rotate(" + 7 + "deg)");
          spore.toggleClass('spore');
        }, 250)
        // spore impact end

        // click spore
      spore.click(function() {
        laserSound.play();
        decreaseParasiteScore();
        increaseHumanScore();
        checkHumanWin();
        // var sporeUp = $("<div class='sporeUp'></div>");
        // $('box').append(sporeUp);
        // sporeUp.animate({
        //   'margin-top': '100px'
        // }, 1000);
        // sporeUp.remove();
        // clearTimeout(burnTimer1);
        // clearTimeout(burnTimer2);
        $(this).toggleClass('lasershot');
        setTimeout(function() {
          $(this).toggleClass('lasershot');
          $(this).toggleClass('lasershot');
          setTimeout(function() {
            console.log("removing", $(this));
            $(this).remove();
          }.bind($(this)), 10);
        }.bind($(this)), 250)

      });
    }

  //Attach click handler that adds "lasershot" class to spore when clicked.

  //After a spore has been clicked on, remove it from the DOM after a short delay.

  //checkHumanWin() that reads the DOM to check score. If parasite score is zero, load win screen.


  var loadUpInterval;
  var loadScreen = $('#loadScreen');
  bg.append(loadScreen);
  wonMessage.hide();
  lostMessage.hide();
  loadScreen.click(function() {
    loadScreen.remove();
    humanScoreTag.show();
    parasiteScoreTag.show();
    startGame();
    loadUpInterval = setInterval(loadUp, 1000);
  });
  wonMessage.click(function(){
      window.reload();
    })
  lostMessage.click(function(){
      window.reload();
    })


});
