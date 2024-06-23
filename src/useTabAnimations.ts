// useTabAnimations.ts
import { gsap } from 'gsap';

export const useTabAnimations = () => {
    const handleMouseEnter = (event: MouseEvent) => {
        gsap.to(event.target, {
            scale: 1.2,
            duration: 0.3,
        });
        gsap.to((event.target as HTMLElement).previousElementSibling, {
            x: -10,
            duration: 0.3,
        });
        gsap.to((event.target as HTMLElement).nextElementSibling, {
            x: 10,
            duration: 0.3,
        });
    };

    const handleMouseLeave = (event: MouseEvent) => {
        gsap.to(event.target, {
            scale: 1,
            duration: 0.3,
        });
        gsap.to((event.target as HTMLElement).previousElementSibling, {
            x: 0,
            duration: 0.3,
        });
        gsap.to((event.target as HTMLElement).nextElementSibling, {
            x: 0,
            duration: 0.3,
        });
    };

    const beforeEnter = (el: HTMLElement) => {
        gsap.set(el, {
            opacity: 0,
            y: 50,
        });
    };

    const enter = (el: HTMLElement, done: () => void) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            onComplete: done,
        });
    };

    const leave = (el: HTMLElement, done: () => void) => {
        gsap.to(el, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            onComplete: done,
        });
    };

    return {
        handleMouseEnter,
        handleMouseLeave,
        beforeEnter,
        enter,
        leave,
    };
};
