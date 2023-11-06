/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
const outputElement = document.getElementById("visitor-count");

window.onload = () => {
    //webpage is loaded
    //increment the counter
    fetch("https://tpimental-apimgmt.azure-api.net/backend-functionapp-current/increment-count")
        .then(response => {

        })
        .catch(error => {
            console.log("Increment count error:", error);

        })
    //get the new count
    fetch("https://tpimental-apimgmt.azure-api.net/backend-functionapp-current/get-count")
        .then(response => {
            if(response.ok){
                return response.json();
            }else {
                return response.json().then(data => {
                    throw new Error(data.message); // If not successful, throw an error with the message
                });
            }
        })
        .then(data => {
            //Process the data from the API response
            const responseData = data;

            outputElement.innerHTML = addNumberSuffix(data);
            console.log(responseData);
        })
        .catch(error => {
            // Error handling
            console.error("Get Count Error: ", error);
        });
}

function addNumberSuffix(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid input';
    }

    const lastDigit = number % 10;
    const secondLastDigit = Math.floor((number % 100) / 10);

    if (secondLastDigit === 1) {
        return number + 'th';
    } else {
        switch (lastDigit) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
            default:
                return number + 'th';
        }
    }
}

// This script will start the fade transition after 5 seconds
setTimeout(function() {
    var gifContainer = document.getElementById("gifContainer");
    gifContainer.style.opacity = 0;

    var mainContent = document.getElementById("mainContent");
    mainContent.style.opacity = 1;
}, 5000); // 5000ms = 5 seconds




window.addEventListener('DOMContentLoaded', event => {


    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

