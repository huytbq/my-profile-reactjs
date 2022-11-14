import React from 'react'
import "./general.scss"
import { SiNamecheap } from "react-icons/si"
import { HiOutlineCake } from "react-icons/hi"
import { BsGenderMale } from "react-icons/bs"
import img from "./avatar.jpg"

export default function General() {
    return (
        <div className='screen-container flex general'>
            <div className="avatar">
                <img src={img} alt="avatar" />
            </div>
            <ul className='general-info'>
                <li>
                    Họ tên: <span>Trịnh Bùi Quang Huy</span>
                    <SiNamecheap className='icon' />
                </li>
                <li>
                    Ngày sinh: <span>12 - 8 - 2001</span>
                    <HiOutlineCake className='icon' />
                </li>
                <li>
                    Giới tính: <span>Nam</span>
                    <BsGenderMale className='icon' />
                </li>
            </ul>
        </div>
    )
}
