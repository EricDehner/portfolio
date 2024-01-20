import { AnimatePresence, motion } from "framer-motion";
import "./Social.css";
import gitHub from "./Assets/github.svg";
import linkedIn from "./Assets/linkedin.svg";
import instagram from "./Assets/instagram.svg";

const Social = ({ isVisible }) => {
    if (window.innerWidth <= 680) {
        return (
            <AnimatePresence>
                {isVisible && (
                    <div key="social" >
                        <motion.div className="verticalStick" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.7 } }} transition={{ duration: 0.1, delay: 0.2 }}>
                        </motion.div>
                        <div className="social">
                            <motion.a draggable={false} href="https://www.instagram.com/eriicdehner/" target="_blank" rel="noreferrer" className="instagram" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0.6 } }} transition={{ duration: 0.1, delay: 0.3 }}>
                                <img draggable={false} className="icon" src={instagram} alt="Instagram" />
                            </motion.a>
                            {/* eslint-disable-next-line */}
                            <motion.div className="stick" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0.5 } }} transition={{ duration: 0.1, delay: 0.4 }}                            >
                            </motion.div>
                            <motion.a draggable={false} href="https://github.com/EricDehner" target="_blank" rel="noreferrer" className="github" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0.4 } }} transition={{ duration: 0.1, delay: 0.5 }}>
                                <img draggable={false} className="icon" src={gitHub} alt="GitHub" />
                            </motion.a>
                            {/* eslint-disable-next-line */}
                            <motion.div className="stick" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0.3 } }} transition={{ duration: 0.1, delay: 0.6 }}>
                            </motion.div>
                            <motion.a draggable={false} href="https://www.linkedin.com/in/eric-dehner/" target="_blank" rel="noreferrer" className="linkedin" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20, transition: { duration: 0.1, delay: 0.2 } }} transition={{ duration: 0.1, delay: 0.7 }}>
                                <img draggable={false} className="icon" src={linkedIn} alt="LinkedIn" />
                            </motion.a>
                            {/* eslint-disable-next-line */}
                        </div>
                    </div>
                )}
            </AnimatePresence>
        )
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <div key="social" className="social">
                    <motion.a draggable={false} href="https://www.linkedin.com/in/eric-dehner/" target="_blank" rel="noreferrer" className="linkedin" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.1 } }} transition={{ duration: 0.1, delay: 0.8 }}>
                        <img draggable={false} className="icon" src={linkedIn} alt="LinkedIn" />
                    </motion.a>
                    {/* eslint-disable-next-line */}
                    <motion.div className="stick" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.2 } }} transition={{ duration: 0.1, delay: 0.7 }}>
                    </motion.div>
                    <motion.a draggable={false} href="https://github.com/EricDehner" target="_blank" rel="noreferrer" className="github" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.3 } }} transition={{ duration: 0.1, delay: 0.6 }}>
                        <img draggable={false} className="icon" src={gitHub} alt="GitHub" />
                    </motion.a>
                    {/* eslint-disable-next-line */}
                    <motion.div className="stick" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.4 } }} transition={{ duration: 0.1, delay: 0.5 }}>
                    </motion.div>
                    <motion.a
                        draggable={false} href="https://www.instagram.com/eriicdehner/" target="_blank" rel="noreferrer" className="instagram" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.5 } }} transition={{ duration: 0.1, delay: 0.4 }}>
                        <img draggable={false} className="icon" src={instagram} alt="Instagram" />
                    </motion.a>
                    {/* eslint-disable-next-line */}
                    <motion.div className="stick" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20, transition: { duration: 0.1, delay: 0.6 } }} transition={{ duration: 0.1, delay: 0.2 }}>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Social;