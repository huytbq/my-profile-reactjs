import React from 'react'
import "./contact.scss"
import { HiOutlineMail } from "react-icons/hi"
import { AiFillPhone, AiFillFacebook } from "react-icons/ai"

export default function Contact() {
    return (
        <div className='screen-container flex'>
            <ul className='contact'>
                <li>
                    <HiOutlineMail className='icon' />
                    <span>trinhbuiquanghuy@gmail.com</span>
                </li>
                <li>
                    <AiFillPhone className='icon' />
                    <span>0868936221</span>
                </li>
                <li>
                    <AiFillFacebook className='icon' />
                    <span>https://www.facebook.com/tbqhuy/</span>
                </li>
            </ul>
        </div>
    )
}
