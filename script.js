document.addEventListener('DOMContentLoaded', () => {

    //Restart button - reload the page
    document.getElementById("restart").onclick = restartGame;

    function restartGame() {
        location.reload();
    }

    //Start button
    document.getElementById("start").onclick = startGame;

    function startGame() {
        var btnNumber = document.getElementById("btn-number").value;

        if (btnNumber > 0 && btnNumber != "") {
            document.getElementById("start").classList.add("d-none");

            //Win button value
            var winButton = Math.floor(Math.random() * btnNumber);
            //console.log(winButton);

            //Creating the buttons
            //Adding classes, ids and functions to those buttons
            for (var i = 0; i < btnNumber; i++) {
                var button = document.createElement('button');
                button.innerHTML = "Is this one?";
                button.setAttribute('class', 'play-button');
                button.setAttribute('id', i);
                button.addEventListener("click", function() {
                    if (this.id == winButton) {
                        alert("This is the correct answer. GOOD JOB!")
                        location.reload();
                    } else {
                        alert("This is not the correct button. Keep looking!");
                    }
                });
                document.getElementById("play-buttons-div").appendChild(button);
            }

        } else {
            alert("Insert a number bigger than 0.")
        }
    }


});