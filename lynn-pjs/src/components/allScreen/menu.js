import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowNavbar = () => {
    useEffect(() => {
        const toggle = document.getElementById('header-toggle');
        const nav = document.getElementById('nav-bar');
        const bodypd = document.getElementById('body-pd');
        const headerpd = document.getElementById('header');
        const menuOpen = document.getElementById('menu-open');
        const menuClose = document.getElementById('menu-close');

        if (toggle && nav && bodypd && headerpd && menuOpen && menuClose) {
            const handleToggle = () => {
                // Show/hide navbar
                nav.classList.toggle('show-nav');
                
                // Change icon
                const isOpen = menuOpen.classList.contains('show');
                menuOpen.classList.toggle('show', !isOpen);
                menuOpen.classList.toggle('hidden', isOpen);
                menuClose.classList.toggle('show', isOpen);
                menuClose.classList.toggle('hidden', !isOpen);

                // Add padding to body and header
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
            };

            toggle.addEventListener('click', handleToggle);

            return () => {
                toggle.removeEventListener('click', handleToggle);
            };
        }
    }); // Empty dependency array ensures useEffect runs once

    return (
        <div className="l-navbar" id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to="/about-lynn" className="nav_logo" style={{textDecoration: 'none'}}>
                        <img
                            className="bx bx-layer nav_logo-icon"
                            src="imgs/logo.png"
                            height="58"
                            alt="logo"
                        />
                    </Link>
                    <div className="nav_list">
                        <Link to="/about-lynn" className="nav_link" style={{textDecoration: 'none'}}>
                            <i className="bx bx-order-alt nav_icon">
                                <span className="material-symbols-outlined show">list_alt</span>
                            </i>
                            <span className="nav_name" id="profile">
                                About Lynn
                            </span>
                        </Link>
                        <Link to="/color-game" className="nav_link" style={{textDecoration: 'none'}}>
                            <i className="bx bx-order-alt nav_icon">
                                <span className="material-symbols-outlined show">list_alt</span>
                            </i>
                            <span className="nav_name" id="colorGame">
                                Color Game
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default ShowNavbar;
