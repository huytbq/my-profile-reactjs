import React from 'react'
import "./individualAbility.scss"
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { FaReact } from "react-icons/fa"

export default function IndividualAbility() {
    return (
        <div className='screen-container flex'>
            <ul className='individual-ability'>
                <li>
                    HTML/CSS: <span>Nắm vững kiến thức về HTML/CSS</span>
                    <AiOutlineHtml5 className='icon' />
                    <DiCss3 className='icon' />
                </li>
                <li>
                    Javascript: <span>Có thể sử dụng Javascript ở mức độ cơ bản</span>
                    <IoLogoJavascript className='icon' />
                </li>
                <li>
                    ReactJs: <span>Hiểu biết về ReactJs ở mức độ cơ bản</span>
                    <FaReact className='icon' />
                </li>
            </ul>
        </div>
    )
}
