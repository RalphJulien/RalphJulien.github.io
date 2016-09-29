"use script";
    $(document).ready(function(){
      console.log("loaded");
    });


    //an array to keep track of the moves the computer makes.
    //computer_moves: [];
    computer_moves: [];

    //an array to keep track of the moves that the player makes.
    //player_moves: [];
    player_moves: [];

    //a variable to keep track of the number of rounds.
    //round_number: 0;
    round_number: 0;

    //function that will run when "start button" is clicked.
    //newGame: function(){}

    //1st step in starting a new game is to reset computer_moves, player_moves, and round to 0.

    //after the reset, begin a new round.
    // startRound();


    newGame: function(){
      computer_moves = [];
      player_moves = [];
      round_number = 0;
      startRound();
    }

    //function that will run at the beginning of each new round.
    //startRound: function(){}

    startRound: function(){
      //when a new round begins, we + 1 to round_number, which keeps track of the round we're on.
      //$('[data-round]').text(++this.round_number);
      $('[data-round]').text(++this.round_number);

      //the computer will randomly choose one of the four squares and push it to the computer_moves array.
      //computer_moves.push(randomColor());
      computer_moves.push(randomColor());

      //keep track of the most recent computer move in order to compare it to the square the player clicks on.
      //player_moves = computer_moves.slice(0);
      player_moves = computer_moves.slice(0);
    }



    //function that runs whenever the player clicks on a square.
    //registerClick: function(e){}
    registerClick: function(e){

      //correct square? compare the clicked square to the most recent computer move.
      //These variables stand for the correct response and the player response.
      // var right_input = player_moves.shift();
      //var player_input = $(e.target).data('square');
      var right_input = player_moves.shift();
      var player_input = $(e.target).data('square');

      //compare these two variables to each other to see whether or not the player was right.
      //If they match, the statement is true. If they do not match, the statement is false.
      //right = (right_input === player_input);
      var right = (right_input === player_input);
    }


    checkLost: function(){

      //when a user clicks on a square, there are 3 possibilities:
      //1 - player clicked the correct square, but has yet to finish pattern,
      //2 - player clicked the correct square, the last square in the pattern,
      //3 - player clicked on the incorrect square, and the game finishes.
      //this "if" statement will only run if the player has finished the pattern correctly.
      //the first condition of this statement will check how many moves remain in the pattern. if 0 moves are left, it moves on to the next condition,
      //the second condition of this statement wil check to see if the clicked square was the right square. if it was, the function will execute.

      //if (player_moves.length === 0 && right) {}

      if (player_moves.length === 0 && right){

        //when the round finishes, disable squares
        //turn_off_Simon();
        turn_off_Simon();

        //here, invoke the function startRound to order the computer to add another move and show the pattern to the player
        //startRound();
        startRound();
      }

      //this if statement only has one condition, function will only execute if the player clicks the incorrect square
      //else if (right == false){}
      else if (right == false){

        //again, disable the squares
        //turn_off_Simon();
        turn_off_Simon();

        //finish the game by invoking the finishGame function
        //finishGame();
        finishGame();
      }

    }

    //the finishGame function only executes when the player clicks on the wrong square
    //finishGame: function(){}
    finishGame: function(){

      //first, let player know that they have lost
      //$('p[data-action=lose]').show();
      $('p[data-action=lose]').show();

      //reset round counter to 0 to play the game again
      //$($('[data-round]').get(0)).text('0');
      $($('[data-round]').get(0)).text('0');

    }





