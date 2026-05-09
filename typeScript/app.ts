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

    // Toggle logic is no longer needed for separate pages

    // Form handlers
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login attempt...');
            // Redirección inmediata y forzada
            window.location.replace('dashboard.html');
        });
    } else {
        console.warn('Login form NOT found in this page');
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('register-name') as HTMLInputElement;
            const emailInput = document.getElementById('register-email') as HTMLInputElement;
            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            console.log('Register attempt:', name, email);
            alert(`Cuenta creada para: ${name}. Ahora puedes iniciar sesión.`);
            window.location.href = 'index.html';
        });
    }

    // Sidebar Active State logic
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // No prevenimos el comportamiento por defecto si son enlaces reales, 
            // pero si son solo para SPA, podrías usar e.preventDefault()
            
            // Si el item tiene el id 'logout-btn', dejamos que el otro handler se encargue
            if (item.id === 'logout-btn') return;

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Opcional: Cambiar el título del panel según el texto del item
            const mainTitle = document.querySelector('.content-header h1');
            const itemText = (item as HTMLElement).innerText;
            if (mainTitle && itemText) {
                mainTitle.textContent = itemText;
            }
        });
    });

})();
