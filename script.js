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
        logo.style.display = 'block';
        logo.classList.add('logo-centered');

        setTimeout(() => {
            mainContent.classList.add('hide-content');
            img2.classList.add('fullscreen-img2');
        }, 1000);

        setTimeout(() => {
            logo.classList.add('white-circle');
            logo.style.opacity = '1';
        }, 3000);

        setTimeout(() => {
            location.reload();
        }, 5000);
    });
});
