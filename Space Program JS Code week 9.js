//creates and calls function getUserInput, contains full name (first and last) and badge number, and calls them to html page 
function getUserInput() {
    // Get input values
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;

    // Concatenate names and check length
    let fullName = firstName + " " + lastName;
    //if statement saying that if the fullname is longer then 20 characters, it calls an alert
    if (fullName.length > 20) {
        //alert for if the if statement isn't met
        alert("Name is too long. Please try again.");
    }
    //if statement saying that if the fullname is less then 3 character, it calls an alert
    if (fullName.length < 3) {
        //alert for if the if statement isn't met
        alert("Name is too short. Please try again.");
    }
    // Validate badge number
    let badgeNumber = document.getElementById("bdg_num").value;
    //if badge number is not a number, greater then 999999, or less then 001, then it calls an alert
    if (isNaN(badgeNumber) || badgeNumber > 999999 || badgeNumber < 001) {
        //alert for if the if statement isn't met
        alert("Badge number is invalid. Please try again.");   
    }

    // Redirect to new page
    window.location.href = "Space_Program_Home.html";
    //returns the function to html
    return getUserInput();
}

//arrays can hold multiple values, this is where we put those
var arrInterval = new Array();

//upon loading webpage, you can see and click a start button, starting the countdown when the viewer is ready
function startButtonClick(){
    //don't let user click the start button while countdown is running
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonEnd").disabled = false;
    
    //allows this variable to get easier access to span id countdown from line 39
    var countdownElement = document.getElementById("Countdown"); 
        
    // passes the value to the function in the JS file so it can add the countdown element
    runTimer(countdownElement); 
}

/*the stop button will read the currTime counters, and upon clicking the button it will
stop the countdown at the currTime counter. */
function stopButtonClick(){
      //don't let user click the stop button while countdown is running
      document.getElementById("buttonStart").disabled = false;
      document.getElementById("buttonEnd").disabled = true;
    //if these requirements are met, the counter is cleared
    for (counter = 0; counter < 51; counter++){
        clearTimeout(arrInterval[counter]);
    }
}

//this is our new countdown function
function runTimer(countdownElement){

     //tracks current countdown time
     var currTime = 50;

     //tracks current timeout
     var timeout = 0;

     //represents the timer waiting 5 seconds before counting down
     var timeoutIncrement = 1000;

        //loops the countdown ten times, for loops are used when you know how many times you want the code to repeat itself
        for(var counter=0; counter < 51; counter++) {

            //takes whatever currTime is and print it
            arrInterval[counter] = setTimeout(function(){
                //when countdown is done
                if (currTime == 0){
                        //shows on webpage that the Countdown is over, and gives the viewer a popup screen
                        alert("Now it's time for take off!!!")
                        //text for when countdown is done and alert is over
                        countdownElement.innerHTML = "Launch Successful!";
                }
                //if current time on countdown is less then 25, a new message will appear with the current timer appearing after the message
                else if (currTime < 30){
                    //text for when the countdown reaches less then 30 seconds remaining
                    countdownElement.innerHTML = "WARNING: Approx. 50% time remaining till launch! Time left = " + currTime;
                }
                //shows currTime on webpage for reader to see until less then 25
                else{
                    countdownElement.innerHTML = currTime;
                }
                //simulates countdown by variables of 5
                currTime = currTime - 1;
            }, timeout);
            //simulates each timeout going down by 5
            timeout = timeout + timeoutIncrement;

        }
}
//creates and calls function animate carousel to create the slides container, the slides, and the arrows
function animateCarousel(){
    //slides container called by ID
    const slidesContainer = document.getElementById("slides-container");
    //slides called by ID
    const slide = document.querySelector(".slide");
    //left arrow/previous arrow called by ID
    const prevButton = document.getElementById("slide-arrow-prev");
    //right arrow/next arrow called by ID
    const nextButton = document.getElementById("slide-arrow-next");
    //right arrow/next arrow, when clicked it transitions to next image, if on final image it won't do that
    nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
    });
    //left arrow/previous arrow, when clicked it transitions to previous image, if on first image it won't do that
    prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
    });
}