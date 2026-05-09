"use strict";
(function () {
    console.log('App.ts loaded and running');
    // Elements
    var loginCard = document.getElementById('login-card');
    var registerCard = document.getElementById('register-card');
    var showRegister = document.getElementById('show-register');
    var showLogin = document.getElementById('show-login');
    console.log('Elements found:', { loginCard: loginCard, registerCard: registerCard, showRegister: showRegister, showLogin: showLogin });
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    // Toggle logic is no longer needed for separate pages
    // Form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log('Login attempt...');
            // Redirección inmediata y forzada
            window.location.replace('dashboard.html');
        });
    }
    else {
        console.warn('Login form NOT found in this page');
    }
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var nameInput = document.getElementById('register-name');
            var emailInput = document.getElementById('register-email');
            var name = nameInput ? nameInput.value : '';
            var email = emailInput ? emailInput.value : '';
            console.log('Register attempt:', name, email);
            alert("Cuenta creada para: ".concat(name, ". Ahora puedes iniciar sesi\u00F3n."));
            window.location.href = 'index.html';
        });
    }
    // Sidebar Active State logic
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            // No prevenimos el comportamiento por defecto si son enlaces reales, 
            // pero si son solo para SPA, podrías usar e.preventDefault()
            // Si el item tiene el id 'logout-btn', dejamos que el otro handler se encargue
            if (item.id === 'logout-btn')
                return;
            navItems.forEach(function (nav) { return nav.classList.remove('active'); });
            item.classList.add('active');
            // Opcional: Cambiar el título del panel según el texto del item
            var mainTitle = document.querySelector('.content-header h1');
            var itemText = item.innerText;
            if (mainTitle && itemText) {
                mainTitle.textContent = itemText;
            }
        });
    });
})();
