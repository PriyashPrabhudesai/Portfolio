$(document).ready(function () {
    const $contactForm = $('.contact-form');
    const $nameInput = $('#name');
    const $emailInput = $('#email');
    const $messageInput = $('#message');
    const $errorDiv = $('.error');

    function validateForm(event) {
        event.preventDefault();

        if ($nameInput.val().trim() === '' || $emailInput.val().trim() === '' || $messageInput.val().trim() === '') {
            $errorDiv.addClass('error-show');
        } else {
            $errorDiv.removeClass('error-show');
            alert('Message sent successfully');
        }
    }

    $contactForm.on('submit', validateForm);
});
