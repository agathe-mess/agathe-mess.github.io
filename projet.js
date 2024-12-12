document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.projects-header');

    headers.forEach(header => {
        const bgImage = header.querySelector('.projects-header-image')?.getAttribute('data-bg');
        if (bgImage) {
            header.style.backgroundImage = `url(${bgImage})`;
        }
    });
});
