
document.addEventListener('DOMContentLoaded', () => {
    const subscriptionCard = document.getElementById('subscription-card');
    const subscriptionForm = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email-input');
    const errorMessage = document.getElementById('error-message');
    const successDialog = document.getElementById('success-dialog');
    const userEmailSpan = document.getElementById('user-email');
    const closeDialogBtn = document.getElementById('close-dialog-btn');
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);


    subscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const email = emailInput.value.trim();
        if (emailRegex.test(email)) {
            emailInput.classList.remove('invalid');
            errorMessage.classList.remove('visible');
            userEmailSpan.textContent = email;
            subscriptionCard.classList.add('hidden');
            successDialog.showModal();

        } else {
            emailInput.classList.add('invalid');
            errorMessage.classList.add('visible');
        }
    });


    closeDialogBtn.addEventListener('click', () => {
        successDialog.close();
        subscriptionCard.classList.remove('hidden');
        emailInput.value = '';
    });

});