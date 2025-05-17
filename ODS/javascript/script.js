document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('.hamburger');
    const navMenu = document.querySelector('#menu-links');
    window.addEventListener('load',function (event) { alert("Parabéns, você está avaliando meu projeto da ODS 3.")});
    hamburguer.addEventListener('click', () => {
        navMenu.classList.toggle('active');
       
        
        const isExpanded = navMenu.classList.contains('active');
        hamburguer.setAttribute('aria-expanded', isExpanded);
        hamburguer.textContent = isExpanded ? 'X' : '☰';
    });
});

