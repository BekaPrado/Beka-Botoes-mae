const botaoDois = document.querySelector('.botao-dois');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const buttonRect = botaoDois.getBoundingClientRect();

    const distanceX = Math.abs(mouseX - buttonRect.x - buttonRect.width / 2);
    const distanceY = Math.abs(mouseY - buttonRect.y - buttonRect.height / 2);

    if (distanceX < 120 && distanceY < 120) {
        const offsetX = (Math.random() - 0.5) * 600;
        const offsetY = (Math.random() - 0.5) * 400;

        botaoDois.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});
