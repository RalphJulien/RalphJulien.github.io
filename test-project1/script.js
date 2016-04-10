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
  // var hitSound = document.createElement('audio');
    // hitSound.setAttribute('src', '../audio/18624.mp3');
    // hitSound.setAttribute('autoplay', 'autoplay');
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
    humanScoreTag.text("HUMANS Score: " + humanScore);
  }
  var decreaseHumanScore = function() {
    humanScore = humanScore - 10;
    console.log("Humans Score: " + humanScore);
    humanScoreTag.text("HUMANS Score: " + humanScore);
  }
  var decreaseParasiteScore = function() {
      parasiteScore = parasiteScore - 10;
      console.log("Parasites Score: " + parasiteScore);
      parasiteScoreTag.text("PARASITES Score: " + parasiteScore);
    }
    //
  var loadUp = function() {
      var spore = $('<div class="spore"></div>');

      var bgFlash = function() {
        setInterval(function() {
          bg.toggleClass('hit');
        }, 250);
      };
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
          bgFlash();
          $(this).toggleClass('infect');
          $(this).toggleClass('infect2');
          setTimeout(function() {
            console.log("Bang!");
            spore.remove();
          }.bind($(this)), 10);
        }.bind($(this)), 250)
        decreaseHumanScore();
        checkParasiteWin();
        console.log("Parasites Score: " + parasiteScore);
      }, 11000);
      var burnTimer1 = setInterval(function() {
        spore.toggleClass('spore2');
        spore.css("transform", "rotate(-" + 7 + "deg)");
      }, 250)
      var burnTimer2 = setInterval(function() {
          spore.css("transform", "rotate(" + 7 + "deg)");
          spore.toggleClass('spore3');
        }, 250)
        // spore impact end
        // click spore begin
      spore.click(function() {
        // hitSound.play();
        decreaseParasiteScore();
        increaseHumanScore();
        checkHumanWin();
        var sporeUp = $("<div class='sporeUp'></div>");
        $('block').append(sporeUp);
        sporeUp.animate({
          'margin-top': '100px'
        }, 1000);
        sporeUp.remove();
        clearTimeout(burnTimer1);
        clearTimeout(burnTimer2);
        $(this).toggleClass('burn');
        setTimeout(function() {
          $(this).toggleClass('burn');
          $(this).toggleClass('burn2');
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
