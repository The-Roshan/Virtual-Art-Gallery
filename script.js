// script.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Display modal on image click with animation
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalImg.style.transform = 'perspective(800px) rotateY(15deg)';
            setTimeout(() => {
                modalImg.style.transform = 'perspective(800px) rotateY(0deg)';
            }, 10);
        });
    });

    // Close modal on click
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
