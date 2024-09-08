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
        e.preventDefault(); // Prevent actual form submission

        // Move logo to the center
        logo.classList.add('logo-centered');

        // Hide other content
        setTimeout(() => {
            mainContent.classList.add('hide-content');
            img2.classList.add('fullscreen-img2');
        }, 1000); // Delay to allow the logo to move first

        // Show the logo with white circle after the image expands
        setTimeout(() => {
            logo.classList.add('white-circle');
            logo.style.opacity = '1'; // Make sure the logo is visible
        }, 3000); // Adjust timing as needed

        // Reload the page after the animation is complete
        setTimeout(() => {
            location.reload();
        }, 5000);
    });
});