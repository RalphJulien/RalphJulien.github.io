"use script";
    $(document).ready(function(){
      console.log("loaded");
    });


    var counterOne = 0;
    $("#square1").click(function(){
      if (counterOne === 0) {
      $(this).css("background-color","black");
      counterOne +=1;
    }
    else if (counterOne === 1) {
      $(this).css("background-color", "blue");
      counterOne -=1;
    }
    });

    var counterTwo = 0;
    $("#square2").click(function(){
      if (counterTwo === 0) {
      $(this).css("background-color","lightskyblue");
      counterTwo +=1;
    }
    else if (counterTwo === 1) {
      $(this).css("background-color", "red");
      counterTwo -=1;
    }
    });

    var counterThree = 0;
    $("#square3").click(function(){
      if (counterThree === 0) {
      $(this).css("background-color","turquoise");
      counterThree +=1;
    }
    else if (counterThree === 1) {
      $(this).css("background-color", "green");
      counterThree -=1;
    }
    });


    var counterFour = 0;
    $("#square4").click(function(){
      if (counterFour === 0) {
      $(this).css("background-color","navy");
      counterFour +=1;
    }
    else if (counterFour === 1) {
      $(this).css("background-color", "yellow");
      counterFour -=1;
    }
    });
