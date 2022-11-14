import React from 'react'
import "./favorites.scss"
import { GiBlackBook } from "react-icons/gi"
import { BiCameraMovie } from "react-icons/bi"
import { FaGamepad } from "react-icons/fa"
export default function Favorites() {
    return (
        <div className='screen-container flex'>
            <ul className='favorites'>
                <li>
                    Đọc truyện <span></span>
                    <GiBlackBook className='icon' />
                </li>
                <li>
                    Xem phim <span></span>
                    <BiCameraMovie className='icon' />
                </li>
                <li>
                    Chơi game <span></span>
                    <FaGamepad className='icon' />
                </li>
            </ul>
        </div>
    )
}
