document.addEventListener('DOMContentLoaded', function () {
    const enrollBtn = document.querySelector('.enroll-btn');
    const enrollmentContainer = document.querySelector('.enrollment-container');

    enrollBtn.addEventListener('mouseenter', function () {
        enrollmentContainer.style.display = 'block';
    });

    enrollBtn.addEventListener('mouseleave', function () {
        enrollmentContainer.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const logo = document.getElementById('logo');
    const img2 = document.getElementById('img2');
    const mainContent = document.querySelector('.first');





    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        mainContent.classList.add('hide-content');

        // Set the background color to white
        document.body.style.backgroundColor = 'white';

        // Add the class to animate the logo to the center
        logo.classList.add('animate');
        setTimeout(() => {
            logo.style.opacity = '0';
        }, 2000);
        setTimeout(() => {
            img2.classList.add('fullscreen-img2');
        }, 3000);
        setTimeout(() => {
            logo.classList.add('white-circle');
            logo.style.opacity = '1';
        }, 4000);
        setTimeout(() => {
            logo.style.top = '20px';
            logo.style.left = '20px';
            logo.classList.remove('animate');
            mainContent.classList.remove('hide-content');
            img2.classList.remove('fullscreen-img2');
        }, 5000);
    });
});