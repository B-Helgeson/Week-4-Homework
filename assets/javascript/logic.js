$(document).ready(function() { //Loads up the JavaScript after the page finishes loading

//defining variables used on page
    var targetNum = 1;
    var currentNum = 2;
    var winCount = 3;
    var lossCount = 4;

//function which can be called to refresh the variables on the page at the end of each click event
    function refreshPageVars(){
    $("target").html(targetNum.toString());
    $("current").html(currentNum);
    $("wins").html(winCount);
    $("losses").html(lossCount);
    }

    
refreshPageVars();

    
    //for (var i = 0; i < letters.length; i++) {
      //  var letterBtn = $("<button class = 'letter-button letter letter-button-color'>");
        //$(letterBtn).attr("data-letter", letters[i]);
        //$(letterBtn).text(letters[i]);}


        //writes intial guesses left value on the DOM
//document.getElementById('winCount').innerHTML = wCount;
//writes intial Losses value on the DOM
//document.getElementById('lossCount').innerHTML = lCount;
//writes intial Wins value on the DOM
//document.getElementById('guess').innerHTML = gCount;









































    console.log("All Logic Processed")//Test to ensure that all of the above javascript worked. 

}); //closing the on load function, this should be the last line of js