import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">CLASSES</Link></li>
        <li><Link to="/">TRAINERS</Link></li>
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/">Our Boxing Classes </Link></li>
        <li><Link to="/">Daily Fitness</Link></li>
        <li><Link to="/">Gym Locations</Link></li>
        <li><Link to="/">SIGN UP TODAY!</Link></li>
    </>
}

export default Menu;
