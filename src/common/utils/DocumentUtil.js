export default class DocumentUtil {
    static scrollToTop() {
        // safari
        document.body.scrollTop = 0;
        // chrome/ff/ie/opera
        document.documentElement.scrollTop = 0;
    }
}
