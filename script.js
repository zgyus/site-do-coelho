document.addEventListener('DOMContentLoaded', () => {
    const slotImages = [
        'https://via.placeholder.com/100x100.png?text=1',
        'https://via.placeholder.com/100x100.png?text=2',
        'https://via.placeholder.com/100x100.png?text=3',
        'https://via.placeholder.com/100x100.png?text=4',
        'https://via.placeholder.com/100x100.png?text=5'
    ];

    const slotElements = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];

    const spinButton = document.getElementById('spinButton');
    const messageElement = document.getElementById('message');

    spinButton.addEventListener('click', () => {
        // Gira os slots
        const selectedImages = slotImages.map(() => {
            const randomIndex = Math.floor(Math.random() * slotImages.length);
            return slotImages[randomIndex];
        });

        slotElements.forEach((slot, index) => {
            slot.style.backgroundImage = `url(${selectedImages[index]})`;
        });

        // Verifica se todos são iguais
        if (selectedImages.every(img => img === selectedImages[0])) {
            messageElement.textContent = 'Parabéns! Você ganhou!';
        } else {
            messageElement.textContent = '';
        }
    });
});
