import { useEffect, useState, type RefObject } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (
    ref: RefObject<HTMLElement | null>,
    options: ScrollAnimationOptions = {}
): boolean => {
    const [isVisible, setIsVisible] = useState(false);
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref, threshold, rootMargin, triggerOnce]);

    return isVisible;
};
