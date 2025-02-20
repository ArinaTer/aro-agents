export function modals() {
    const modalTrigger = document.querySelectorAll('[data-open-modal]');
    const modals = document.querySelectorAll('.modal');

    function closeModal(modal) {
        modal.classList.remove('show');
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentModalId = btn.getAttribute('data-open-modal');
            const targetModal = document.getElementById(currentModalId);

            lenisScroll.stop();

            if (targetModal) {
                targetModal.classList.add('show');
            }
        });
    });

    modals.forEach(modal => {
        const closeButton = modal.querySelector('[data-modal-close]');

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                closeModal(modal);
                lenisScroll.start();
            });
        }

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
                lenisScroll.start();
            }
        });
    });
}