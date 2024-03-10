import { SCROLL_SPEED } from "./constants";

export const scrollPage = (direction: 'Up' | 'Down') => {
    console.log('scrolling', direction);
    if (direction === 'Down') {
        window.scrollBy(0, SCROLL_SPEED);
    } else {
        window.scrollBy(0, -SCROLL_SPEED);
    }
};