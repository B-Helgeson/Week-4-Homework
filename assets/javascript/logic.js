$(document).ready(function() { //Loads up the JavaScript after the page finishes loading

//defining variables used on page
    var targetNum
    var currentNum = 0;
    var winCount = 0;
    var lossCount = 0;
    var crystalPics = []

 

//function which can be called to rewrite the variables on the page at the end of each action
    function rewritePageVars(){
    $("#current").text(currentNum);
    $("#wins").text(winCount);
    $("#losses").text(lossCount);
    $("#target").text(targetNum)
    }

//function to generate a random target number.
        function generateTargetNum() {
        targetNum = Math.floor((Math.random() * 120) + 19);
        console.log(targetNum)}

        generateTargetNum();


//function to generate random crystal values for c1 - c4
        //for loop on crystals array, math floor between 1 - 12.



        
//on click listener to add crystal values to the current number
        $("#c1").on("click",function(){
        })



//values listener to alert on win or loss and then reset the game (alert upon reset)
        if (currentNum > targetNum) {
            lossCount++;
            rewritePageVars();
            alert("You lose!")

        } else if (currentNum === targetNum) {
            winCount++;
            reWritePageVars();
            alert("You Win!")
        }



//initial write of page values, to be removed later. 
    rewritePageVars();



    //button to increment then refresh page values, just to test overall functionality... will be removed later. 
    $("#inc").click(function(){
        currentNum++;
        winCount++;
        lossCount++;
        rewritePageVars()
    });





start();


    console.log("All Logic Processed")//Test to ensure that all of the above javascript worked. 

}); //closing the on load function, this should be the last line of js