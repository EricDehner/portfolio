import "./Loading.css"
import { motion } from "framer-motion"

const Loading = ({ onComplete }) => {
    return (
        <motion.section className="loading" initial={{ opacity: 1, x: 0, transition: { duration: 2, delay: 4 } }} animate={{ opacity: 0, x: 0, transition: { duration: 1, delay: 2 } }} onAnimationComplete={onComplete}>
            <div>
                <svg className="loading_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z" /></svg>

                <svg className="loading_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" /></svg>
            </div>
        </motion.section >
    )
}
export default Loading