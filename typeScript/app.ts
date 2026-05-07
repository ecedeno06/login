(function () {
    console.log('App.ts loaded and running');

    // Elements
    const loginCard = document.getElementById('login-card');
    const registerCard = document.getElementById('register-card');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    console.log('Elements found:', { loginCard, registerCard, showRegister, showLogin });
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const registerForm = document.getElementById('register-form') as HTMLFormElement;

    // Toggle logic
    if (showRegister && loginCard && registerCard) {
        showRegister.addEventListener('click', () => {
            loginCard.classList.add('hidden');
            registerCard.classList.remove('hidden');
        });
    }

    if (showLogin && loginCard && registerCard) {
        showLogin.addEventListener('click', () => {
            registerCard.classList.add('hidden');
            loginCard.classList.remove('hidden');
        });
    }

    // Form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('login-email') as HTMLInputElement;
            const email = emailInput ? emailInput.value : '';
            console.log('Login attempt:', email);
            alert(`Iniciando sesión con: ${email}`);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('register-name') as HTMLInputElement;
            const emailInput = document.getElementById('register-email') as HTMLInputElement;
            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            console.log('Register attempt:', name, email);
            alert(`Cuenta creada para: ${name}`);
        });
    }

})();
