"use script";
    $(document).ready(function(){
      console.log("loaded");
    });

    var series = [1, 2, 1];

    function newGame(){

      animate(series)
    }

    var i = 0;

    var interval = setInterval(function(){
        lightup(series[i]);

        i++;

        // when we reach the end of the series array, we clear the interval
        if (i>=series.length){
          clearInterval(interval);
        }
      }, 600);

    function animate(series){
      //increment an index to keep track of the progression of the series array
      i;

      //JavaScript setInterval method to regulate the timing
      interval;

    }

    //this function adds the class "light"
    var $quad = $('[square=' + quad +']').addClass('light');

    function lightup(quad){
      $quad;

      window.setTimeout(function(){

        //after 300ms timeout, the "light" class is removed, restoring the square to its normal color
        $quad.removeClass('light');
      }, 300);
    }

    var random_color = Math.floor(Math.random() * 4)+1;

    var squareClicks = [];

    var endRound = function(){
        if (squareClicks != series){
          alert("End of Round!");
        }
      }

    // wait for player to click start

    // start a new round

    $('.start').click(function() {
      /* Act on the event */

      //alert("New Round!");

      // Add a random number (1-4) to the series
      series.push(random_color);

      // Animate the sequence to the user
      newGame();

      // Enable user interaction with the squares, and register any clicks on the Simon squares
      $('.simon').click(function(lightup) {
        /* Act on the event */

      // While the player has not entered an incorrect response, and the number of clicks is less than the length of the series, wait for player input

      endRound()


    });
      });







    // var counterOne = 0;
    // var blueSquare = setInterval(function() {
    //   $("#square1").toggleClass('lightup');
    // }, 1000);

    // var counterOne = 0;
    // setInterval(function() {
    //   if (counterOne === 0) {
    //   $("#square1").toggleClass('lightup');
    // }, 500;
    //   counterOne +=1;
    // }
    // else if (counterOne === 3) {
    //   clearInterval();
    // });

    // clearInterval(blueSquare);

//     var evenNum_one = Math.floor( Math.random() * 10/ 2 ) * 2 + 2;
//     var evenNum_two = Math.floor( Math.random() * 10/ 2 ) * 2 + 2;
//     var evenNum_three = Math.floor( Math.random() * 10/ 2 ) * 2 + 2;
//     var evenNum_four = Math.floor( Math.random() * 10/ 2 ) * 2 + 2;

//     var counter_one = 0;
//     var counter_two = 0;
//     var counter_three = 0;
//     var counter_four = 0;



//     var blueSquare = setInterval(function() {
//       $("#square1").toggleClass('lightup');
//       counter_one++;
//       if(counter_one === evenNum_one) {
//         clearInterval(blueSquare);
//     }
// }, 500);


//     var redSquare = setInterval(function() {
//       $("#square2").toggleClass('lightup');
//       counter_two++;
//       if(counter_two === evenNum_two) {
//         clearInterval(redSquare);
//     }
// }, 500);


//     var greenSquare = setInterval(function() {
//       $("#square3").toggleClass('lightup');
//       counter_three++;
//       if(counter_three === evenNum_three) {
//         clearInterval(greenSquare);
//     }
// }, 500);


//     var yellowSquare = setInterval(function() {
//       $("#square4").toggleClass('lightup');
//       counter_four++;
//       if(counter_four === evenNum_four) {
//         clearInterval(yellowSquare);
//     }
// }, 500);



    // var squareArray = [blueSquare, redSquare, greenSquare, yellowSquare];

    // while (squareArray.length) {
    //   squareArray.shift().call();
    // }




    // setTimeout(function() {
    //   $("#square2").toggleClass('lightup');
    // }, 500);

    // setTimeout(function() {
    //   $("#square3").toggleClass('lightup');
    // }, 500);

    // setTimeout(function() {
    //   $("#square4").toggleClass('lightup');
    // }, 500);


    // var counterOne = 0;
    // $("#square1").click(function(){
    //   if (counterOne === 0) {
    //   $(this).css("background-color","black");
    //   counterOne +=1;
    // }
    // else if (counterOne === 1) {
    //   $(this).css("background-color", "blue");
    //   counterOne -=1;
    // }
    // });

    // var counterTwo = 0;
    // $("#square2").click(function(){
    //   if (counterTwo === 0) {
    //   $(this).css("background-color","lightskyblue");
    //   counterTwo +=1;
    // }
    // else if (counterTwo === 1) {
    //   $(this).css("background-color", "red");
    //   counterTwo -=1;
    // }
    // });

    // var counterThree = 0;
    // $("#square3").click(function(){
    //   if (counterThree === 0) {
    //   $(this).css("background-color","turquoise");
    //   counterThree +=1;
    // }
    // else if (counterThree === 1) {
    //   $(this).css("background-color", "green");
    //   counterThree -=1;
    // }
    // });


    // var counterFour = 0;
    // $("#square4").click(function(){
    //   if (counterFour === 0) {
    //   $(this).css("background-color","navy");
    //   counterFour +=1;
    // }
    // else if (counterFour === 1) {
    //   $(this).css("background-color", "yellow");
    //   counterFour -=1;
    // }
    // });

    // using d09_selectors_jQuery homework as a base to work off from
