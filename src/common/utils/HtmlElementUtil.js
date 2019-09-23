export default class HtmlElementUtil {
    static hasClass(element, className) {
        const classList = element.classList || null;

        if (classList === null) {
            return false;
        }

        return classList.contains(className);
    }

    static hasAllClasses(element, classNames) {
        return element.closest(classNames.join('')) !== null;
    }
}
