import { useEffect } from "react";

const useScrollAnimation = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("in-view");
                        }, index * 200); // Staggered delay: 200ms per element
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default useScrollAnimation;