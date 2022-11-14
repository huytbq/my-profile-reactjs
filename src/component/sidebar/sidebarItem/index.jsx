import React from 'react'
import "./sidebarItem.scss"
import { Link, useLocation } from "react-router-dom"

export default function SidebarItem({ to, title }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const className = isActive ? "title active" : "title";
    return (
        <Link to={to}>
            <div className={className}>
                {title}
            </div>
        </Link>
    )
}
