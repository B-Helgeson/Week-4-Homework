$(document).ready(function() { //Loads up the JavaScript after the page finishes loading

//defining variables used on page
    var targetNum
    var currentNum = 0;
    var winCount = 0;
    var lossCount = 0;
    var crytals = [ruby, emerald, sapphire, diamond]

//function which can be called to refresh the variables on the page at the end of each round
    function refreshPageVars(){
    $("#current").text(currentNum);
    $("#wins").text(winCount);
    $("#losses").text(lossCount);
    generateTargetNum();
    $("target").text(targetNum)
    }

//function to generate a random target number.
        //math random, math floor between 19 - 120.


//function to generate random crystal values for c1 - c4
        //for loop on crystals array, math floor between 1 - 12.



//on click listener to add crystal values to the current number




//values listener to alert on win or loss and then reset the game (alert upon reset)




//initial write of page values, to be removed later. 
    refreshPageVars();



    //button to increment then refresh page values, just to test overall functionality... will be removed later. 
    $("#inc").click(function(){
        targetNum++;
        currentNum++;
        winCount++;
        lossCount++;
        refreshPageVars()});



    console.log("All Logic Processed")//Test to ensure that all of the above javascript worked. 

}); //closing the on load function, this should be the last line of js