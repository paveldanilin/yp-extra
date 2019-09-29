export default class DocumentUtil {
    static scrollToTop() {
        //safari
        //document.body.scrollTop = 0;
        //chrome/ff/ie/opera
        //document.documentElement.scrollTop = 0;

        const position = document.body.scrollTop || document.documentElement.scrollTop;
        let timerAnim = null;

        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 4)));
            timerAnim = setTimeout(DocumentUtil.scrollToTop, 30);
        } else {
            clearTimeout(timerAnim);
        }
    }
}
