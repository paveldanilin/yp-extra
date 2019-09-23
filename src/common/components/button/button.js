import DocumentUtil from '../../utils/DocumentUtil';
import HtmlElementUtil from '../../utils/HtmlElementUtil';

export default class Button {
    static clickEventHandler(event) {
        if (! Button.isEvent(event)) {
            return;
        }

        if (HtmlElementUtil.hasAllClasses(event.target, ['.button', '.button_top']) === true) {
            DocumentUtil.scrollToTop();
        }
    }

    static isEvent(event) {
        return event.target !== null && event.target !== undefined;
    }
}
