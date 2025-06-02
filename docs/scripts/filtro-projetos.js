const ANIMATION_DURATION = 300; // em milissegundos
const TRANSITION_STYLE = "opacity 0.3s ease, transform 0.3s ease";

/**
 * Aplica ou remove animação de um card baseado na categoria selecionada
 * @param {HTMLElement} card - O elemento card a ser animado
 * @param {boolean} show - Se o card deve ser mostrado ou escondido
 */
function animateCard(card, show) {
    if (show) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.display = '';
    } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.display = 'none';
        }, ANIMATION_DURATION);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const cards = document.querySelectorAll('.card-grid .card-item');

    cards.forEach(card => {
        card.style.transition = TRANSITION_STYLE;
    });
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filtroBtns.forEach(b => b.classList.remove('ativo'));
            this.classList.add('ativo');

            const selectedCategory = this.getAttribute('data-categoria');
            cards.forEach(card => {
                const show = selectedCategory === 'todos' || 
                           card.getAttribute('data-categoria') === selectedCategory;
                animateCard(card, show);
            });
        });
    });
});
