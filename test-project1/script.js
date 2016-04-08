"use strict"
jQuery(function() {
  console.log("Loaded");
  //Straight down is 375 px
  //Width is 900px
  var time = $('#block .pTimer')
  var humanScoreTag = $('#block .p1');
  var parasiteScoreTag = $('#block .p2');
  var wonMessage = $('#endMessageWon');
  var lostMessage = $('#endMessageLost');
  var hitSound = document.createElement('audio');
    hitSound.setAttribute('src', '../audio/18624.mp3');
    hitSound.setAttribute('autoplay', 'autoplay');
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
      $('missile').remove();
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
      $('missile').remove();
      return 'loss';
    } else {
      return 'keepPlaying';
    }
  };
  var parasiteScore;
  var humanScore;
  var bg = $("#block");
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
    humanScoreTag.text("HUMAN RACE Score: " + humanScore);
  }
  var decreaseHumanScore = function() {
    humanScore = humanScore - 10;
    console.log("Humans Score: " + americaScore);
    humanScoreTag.text("HUMAN RACE Score: " + humanScore);
  }
  var decreaseParasiteScore = function() {
      parasiteScore = parasiteScore - 10;
      console.log("Parasites Score: " + parasiteScore);
      parasiteScoreTag.text("PARASITES Score: " + parasiteScore);
    }
    //
  var loadUp = function() {
      var missile = $('<div class="missile"></div>');

      var bgFlash = function() {
        setInterval(function() {
          bg.toggleClass('hit');
        }, 250);
      };
      var aSide;
      var bSide;
      var cSide;
      var speed = 12000 - changeSpeed();
      missile.appendTo(bg);
      var launchPoint = ((Math.random() * bg.width()));
      missile.css("left", launchPoint);
      var angle = Math.floor(Math.random() * (45 - 1 + 1) + 1);
      missile.css("transform", "rotate(" + angle + "deg)");
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
      missile.animate({
        'left': +vector(angle, launchPoint) + 'px',
        'top': '+300px'
      }, speed);
      //launch missile end
      setTimeout(function() {
        //humanScoreTag.text("HUMAN RACE Score: " + humanScore);
        missile.toggleClass('hitsploded');
        setTimeout(function() {
          bgFlash();
          $(this).toggleClass('hitsploded');
          $(this).toggleClass('hitsploded2');
          setTimeout(function() {
            console.log("Bang!");
            missile.remove();
          }.bind($(this)), 10);
        }.bind($(this)), 250)
        decreaseHumanScore();
        checkParasiteWin();
        console.log("Parasites Score: " + parasiteScore);
      }, 11000);
      var burnTimer1 = setInterval(function() {
        missile.toggleClass('missile2');
        missile.css("transform", "rotate(-" + 7 + "deg)");
      }, 250)
      var burnTimer2 = setInterval(function() {
          missile.css("transform", "rotate(" + 7 + "deg)");
          missile.toggleClass('missile3');
        }, 250)
        // missile impact end
        // click missile begin
      missile.click(function() {
        hitSound.play();
        decreaseParasiteScore();
        increaseHumanScore();
        checkHumanWin();
        var missileUp = $("<div class='missileUp'></div>");
        $('block').append(missileUp);
        missileUp.animate({
          'margin-top': '100px'
        }, 1000);
        missileUp.remove();
        clearTimeout(burnTimer1);
        clearTimeout(burnTimer2);
        $(this).toggleClass('sploded');
        setTimeout(function() {
          $(this).toggleClass('sploded');
          $(this).toggleClass('sploded2');
          setTimeout(function() {
            console.log("removing", $(this));
            $(this).remove();
          }.bind($(this)), 10);
        }.bind($(this)), 250)

      });
    }
    //

  //
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

  // }
});
