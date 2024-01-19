import "./Scroll.css"
import { useState } from "react"

const Scroll = () => {

    const [width, setWidth] = useState()

    const scroll = () => {
        let fullHeight = document.body.scrollHeight - window.innerHeight
        let scr = window.pageYOffset
        let progress = (scr / fullHeight) * 100
        setWidth(progress)
    }

    window.addEventListener(`scroll`, scroll)

    return (
        <div style={{ width: `${width}%` }} className="scroll"></div>
    )
}
export default Scroll