export default class AnimationUtil {
    static mouseoverEventHandler(event) {
        if (! event.target) {
            return;
        }

        const animated = AnimationUtil.findWithDataAnimationAttribute(event.target);

        if (animated && !AnimationUtil.isElementAnimated(animated)) {
            AnimationUtil.play(animated);
        }
    }

    static findWithDataAnimationAttribute(element) {
        if (element.hasAttribute('data-animation')) {
            return element;
        }

        if (!element.parentNode) {
            return null;
        }

        return AnimationUtil.findWithDataAnimationAttribute(element.parentNode);
    }

    static isElementAnimated(element) {
        return element.classList.contains('animated');
    }

    static play(element) {
        element.classList.add('animated');

        AnimationUtil.getAnimations(element).forEach((animationName) => {
            element.classList.add(animationName);
        });

        element.addEventListener('animationend', () => {
            AnimationUtil.clear(element);
        });
        element.addEventListener('oanimationend', () => {
            AnimationUtil.clear(element);
        });
        element.addEventListener('MSAnimationEnd', () => {
            AnimationUtil.clear(element);
        });
        element.addEventListener('mozAnimationEnd', () => {
            AnimationUtil.clear(element);
        });
        element.addEventListener('webkitAnimationEnd', () => {
            AnimationUtil.clear(element);
        });
    }

    static clear(element) {
        const delayClass = AnimationUtil.getAnimationDelayClass(element);
        const animations = AnimationUtil.getAnimations(element);

        if (delayClass) {
            element.classList.remove(delayClass);
        }

        animations.forEach((animationName) => {
            element.classList.remove(animationName);
        });

        element.classList.remove('animated');
    }

    static getAnimations(element) {
        if (!element.hasAttribute('data-animation')) {
            return [];
        }
        return element.getAttribute('data-animation').split(' ');
    }

    static getAnimationMode(element) {
        return element.getAttribute('data-animation-mode');
    }

    static getAnimationDelayClass(element) {
        if (!element.hasAttribute('data-animation-delay')) {
            return;
        }

        const animDelay = element.getAttribute('data-animation-delay');

        switch (animDelay) {
            case '2s': return 'delay-2s';
            case '3s': return 'delay-3s';
            case '4s': return 'delay-4s';
            case '5s': return 'delay-5s';
            default: return  null;
        }
    }
}
