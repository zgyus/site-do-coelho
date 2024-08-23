document.addEventListener('DOMContentLoaded', () => {
    const slotElements = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];

    const spinButton = document.getElementById('spinButton');
    const messageElement = document.getElementById('message');

    spinButton.addEventListener('click', () => {
        // Define uma rotação aleatória para cada slot
        slotElements.forEach((slot) => {
            const randomRotation = Math.floor(Math.random() * 360); // Rotação aleatória entre 0 e 360 graus
            slot.style.transform = `rotate(${randomRotation}deg)`;
        });

        // Verifica se todos os slots têm a mesma rotação
        const rotations = slotElements.map(slot => slot.style.transform);
        if (rotations.every(rotation => rotation === rotations[0])) {
            messageElement.textContent = 'Parabéns! Você ganhou!';
        } else {
            messageElement.textContent = '';
        }
    });
});
