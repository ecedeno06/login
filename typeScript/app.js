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
    // Toggle logic
    if (showRegister && loginCard && registerCard) {
        showRegister.addEventListener('click', function () {
            loginCard.classList.add('hidden');
            registerCard.classList.remove('hidden');
        });
    }
    if (showLogin && loginCard && registerCard) {
        showLogin.addEventListener('click', function () {
            registerCard.classList.add('hidden');
            loginCard.classList.remove('hidden');
        });
    }
    // Form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var emailInput = document.getElementById('login-email');
            var email = emailInput ? emailInput.value : '';
            console.log('Login attempt:', email);
            alert("Iniciando sesi\u00F3n con: ".concat(email));
        });
    }
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var nameInput = document.getElementById('register-name');
            var emailInput = document.getElementById('register-email');
            var name = nameInput ? nameInput.value : '';
            var email = emailInput ? emailInput.value : '';
            console.log('Register attempt:', name, email);
            alert("Cuenta creada para: ".concat(name));
        });
    }
})();
