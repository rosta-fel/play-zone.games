import TippyUtil from "./utils/tippy.js";

document.addEventListener('DOMContentLoaded', function () {
    const flashMessagesError = document.getElementById('flash-messages-error');

    if (flashMessagesError) {
        TippyUtil.showTippy(document.getElementById('login-form'), flashMessagesError.innerText);
    }
});