import TippyUtil from "../utils/tippy.js";

const commonOptions = {
    animation: 'scale',
    placement: 'bottom',
    inertia: true,
    theme: 'azure'
};

function createTippy(selector, options) {
    TippyUtil.tippy(selector, { ...commonOptions, ...options });
}

// Usage
createTippy('#store-link', {
    content: '🥺 Soon...',
});

createTippy('.logout-link', {
    content: 'Click to logout!',
    animation: 'shift-toward-extreme',
});

['#username', '#email', '#password'].forEach((elementId) => {
    createTippy(elementId, {
        maxWidth: 200,
        trigger: 'focus',
        theme: 'azure-yellow-bordered',
        onCreate(instance) {
            instance.disable();
        }
    });
});
