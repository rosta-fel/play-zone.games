class TippyUtil {
    static tippy = window.tippy;

    static showTippy(element, content) {
        element["_tippy"].setContent(content);
        element["_tippy"].enable();
        element["_tippy"].show();
    }
}

export default TippyUtil;