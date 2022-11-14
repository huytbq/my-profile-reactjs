import React from 'react'
import "./sidebar.scss"
import SidebarItem from './sidebarItem'

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <nav className="nav">
                <ul>
                    <li>
                        <SidebarItem to="/" title="Giới thiệu chung" />
                    </li>
                    <li>
                        <SidebarItem to="/individualAbility" title="Năng lực" />
                    </li>
                    <li>
                        <SidebarItem to="/favorites" title="Sở thích" />
                    </li>
                    <li>
                        <SidebarItem to="/contact" title="Liên hệ" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
