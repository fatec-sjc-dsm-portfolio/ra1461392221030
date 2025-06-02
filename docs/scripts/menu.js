// Script para controlar o menu hamburger e sidebar
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Criar botão de fechar
    const closeButton = document.createElement('button');
    closeButton.className = 'close-menu';
    closeButton.innerHTML = '✕'; // Símbolo X
    navLinks.insertBefore(closeButton, navLinks.firstChild);
    
    // Criar e adicionar o overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Função para abrir o menu
    function openMenu() {
        navLinks.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
    
    // Função para fechar o menu
    function closeMenu() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; 
    }
    
    // Toggle menu quando o hamburger for clicado
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
      // Fecha o menu quando um link é clicado
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Fecha o menu quando clicar no botão de fechar
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
    });
    
    // Fecha o menu quando clicar no overlay
    overlay.addEventListener('click', closeMenu);
    
    // Fecha o menu quando a tecla ESC é pressionada
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});
