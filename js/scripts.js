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
    fetch("https://tpimental-functionapp.azurewebsites.net/api/HttpTrigger1")
        .then(response => response.json())
        .then(data => {
            //Process the data from the API response
            const responseData = data;

            outputElement.innerHTML = addNumberSuffix(data);
            console.log(responseData);
        })
        .catch(error => {
            // Error handling
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

