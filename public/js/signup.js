import TippyUtil from "./utils/tippy.js";
import ValidatorUtil from "./utils/validator.js";

function handleSignupForm(username, email, password) {
    const validation = ValidatorUtil.validateForm(username, email, password);

    if (validation) {
        TippyUtil.showTippy(validation.element, validation.message);
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const flashMessagesError = document.getElementById('flash-messages-error');

    if (flashMessagesError) {
        const username = document.getElementById('username');
        TippyUtil.showTippy(username, flashMessagesError.innerText);
    }

    const signupBtn = document.getElementById('signup-btn');
    signupBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        if (handleSignupForm(username, email, password)) {
            document.getElementById('signup-form').submit();
        }
    });
});