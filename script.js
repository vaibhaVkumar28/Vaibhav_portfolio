document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        setTimeout(() => {
            item.classList.remove('active');
        }, 300);
    });
});