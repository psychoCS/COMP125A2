"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    function addTextTotext() {
        // Let's get the element on the page
        let text = document.getElementsByClassName("text")[0];

        if (text) {
            // Then lets create a new div element

            let newDiv = document.createElement("div");

            // Configure
            newDiv.innerHTML =
                `
                <p> It's really tricky to talk about yourself </p>
                <p> But I will try to keep as simples as possible</p>              
                <p> Brazilian, Born in 82 </p>
                <p> Together with my soul mate since 2011 </p>                
                <p> Living in Canada with her since 2019 </p>
                <p> Marvel Maniac (Comics, Games, Movies) </p>
                <p> Love games that get you new experiences </p>
                <p> My main goal is to turn all this chaos in codes</p>
                <p> Do let's go throught the portal "Alice" </p>

                `;

            // step 4 attach the new element
            text.appendChild(newDiv);
            return true;
        }
        return false;
    }

    function validateForm() {
        let contactUsForm = document.forms[0];

        if (contactUsForm) {
            contactUsForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => {
                if (firstName.value.length < 2) {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter at least 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => {
                if (lastName.value.length < 3) {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter at least 3 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });



            // creates a "hook" or reference to the button element with an id of "submitButton"
            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Submit Button Clicked");
            });
        }
        return false;
    }


    // named function
    function Start() {
        console.log('%cApp Started...', "color:white; font-size: 24px;");

        let success = addTextTotext();

        if (success) {
            console.log("successfully added paragraphs to text");
        } else {
            console.warn("content not added to text- does not exist");
        }

        let formValidated = validateForm();
        if (formValidated) {
            console.log("successfully validated form");
        } else {
            console.warn("form not validated - does not exist");
        }

    }

    window.addEventListener("load", Start);

})();

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});