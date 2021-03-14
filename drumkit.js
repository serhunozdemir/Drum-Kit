    var numberOfDrumButtons = document.querySelectorAll(".drum").length;


    for (var i = 0; i < numberOfDrumButtons; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function() {

            var buttonInnerHTML = this.innerHTML;
            sound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);


        });


    }

    // Klavye kullanımı

    document.addEventListener("keypress", function(event) {
        sound(event.key);
        buttonAnimation(event.key);

    });

    function sound(key) {
        switch (key) {

            case "w":
                var davul1 = new Audio('sounds/tom-1.mp3');
                davul1.play();
                break;

            case "a":
                var davul2 = new Audio("sounds/tom-2.mp3");
                davul2.play();
                break;

            case "s":
                var davul3 = new Audio("sounds/tom-3.mp3");
                davul3.play();
                break;

            case "d":
                var davul4 = new Audio("sounds/tom-4.mp3");
                davul4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var zil = new Audio("sounds/crash.mp3");
                zil.play();
                break;

            case "l":
                var bass = new Audio("sounds/kick-bass.mp3");
                bass.play();
                break;

            default:
                console.log(buttonInnerHTML);


        }

    }

    function buttonAnimation(currentkey) {
        var activeButton = document.querySelector("." + currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);


    }