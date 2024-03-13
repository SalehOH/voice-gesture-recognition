import { SCROLL_SPEED } from "./constants";

export const scrollPage = (direction: 'Up' | 'Down') => {
    if (direction === 'Down') {
        window.scrollBy(0, SCROLL_SPEED);
    } else {
        window.scrollBy(0, -SCROLL_SPEED);
    }
};