import Button from './components/button/button';
import AnimationUtil from './utils/AnimationUtil';

document.addEventListener('click', (event) => {
    Button.clickEventHandler(event);
});

const listOfAnimatedElement = document.querySelectorAll('[data-animation]');

listOfAnimatedElement.forEach((el) => {
    el.addEventListener('mouseover', (event) => {
        AnimationUtil.mouseoverEventHandler(event);
    });
});
