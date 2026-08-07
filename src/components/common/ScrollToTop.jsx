import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import "./scrollToTop.css";

function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth",

        });

    };

    return (

        <button
            className={`scroll-top ${visible ? "show" : ""}`}
            onClick={scrollTop}
            aria-label="Back to top"
        >

            <ChevronUp size={22} />

        </button>

    );

}

export default ScrollToTop;