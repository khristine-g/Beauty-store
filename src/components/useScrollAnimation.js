import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    };

    // Check on scroll
    window.addEventListener("scroll", handleScroll);

    // Check initially
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollAnimation;