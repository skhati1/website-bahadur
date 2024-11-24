import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageContent = ({ children }) => {
    const [slideDirection, setSlideDirection] = useState("right");
    const [isSliding, setIsSliding] = useState(false);
    const location = useLocation();
    const prevPathname = React.useRef(location.pathname);

    const navigationOrder = ["/", "/about", "/services", "/contact"];

    useEffect(() => {
        const prevIndex = navigationOrder.indexOf(prevPathname.current);
        const currentIndex = navigationOrder.indexOf(location.pathname);

        if (currentIndex < prevIndex) {
            setSlideDirection("left");
        } else if (currentIndex > prevIndex) {
            setSlideDirection("right");
        }

        setIsSliding(true);
        prevPathname.current = location.pathname;

        const timer = setTimeout(() => {
            setIsSliding(false); // Reset after animation
        }, 500); // Match the duration of the animation

        return () => clearTimeout(timer);
    }, [location, navigationOrder]);

    // Determine which class to apply based on state
    const transitionClass = isSliding ? "page-content-exit" : "page-content-enter";
    const slideClass = slideDirection === "right" ? "page-slide-in-right" : "page-slide-in-left";

    return (
        <div className={`page-container ${transitionClass}`}>
            <div className={`page-content ${slideClass}`}>
                {children}
            </div>
        </div>
    );
};

export default PageContent;
