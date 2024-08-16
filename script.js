document.addEventListener('DOMContentLoaded', () => {
    const slotValues = ['A', 'B', 'C', 'D', 'E'];

    const slotElements = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];

    const spinButton = document.getElementById('spinButton');
    const messageElement = document.getElementById('message');

    spinButton.addEventListener('click', () => {
        // Gira os slots
        const selectedValues = slotValues.map(() => {
            const randomIndex = Math.floor(Math.random() * slotValues.length);
            return slotValues[randomIndex];
        });

        slotElements.forEach((slot, index) => {
            slot.textContent = selectedValues[index];
        });

        // Verifica se todos são iguais
        if (selectedValues.every(value => value === selectedValues[0])) {
            messageElement.textContent = 'Parabéns! Você ganhou!';
        } else {
            messageElement.textContent = '';
        }
    });
});
