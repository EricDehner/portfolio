import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import "./TopBtn.css";

const TopBtn = ({ isVisible }) => {
    if (window.innerWidth <= 425) {
        return (
            <AnimatePresence>
                {isVisible && (<motion.section key="top-btn" className="cv" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <Link className="cv_item" to="top" spy={true} smooth={true} offset={0} duration={700}>
                        <span className="material-symbols-outlined--up">arrow_upward</span>
                    </Link>
                </motion.section>
                )}
            </AnimatePresence>
        )
    }

    return (
        <AnimatePresence>
            {isVisible && (<motion.section key="top-btn" className="cv" initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 70 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Link className="cv_item" to="top" spy={true} smooth={true} offset={0} duration={700}>
                    <span className="material-symbols-outlined--up">arrow_upward</span>
                </Link>
            </motion.section>
            )}
        </AnimatePresence>
    );
};

export default TopBtn;