import React from 'react';

const Header = () => {
    return (
        <header className="header" id="header">
            <div id="main-screen-header" className="col" style={{ margin: 0, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                <div className="row align-items-center">
                    <div className="col-2 d-flex align-items-center">
                        <div className="header_toggle" style={{ padding: '1rem' }}>
                            <i className="bx bx-menu" id="header-toggle">
                                <span id="menu-open" className="material-symbols-outlined show">
                                    menu
                                </span>
                                <span id="menu-close" className="material-symbols-outlined hidden">
                                    close
                                </span>
                            </i>
                        </div>
                    </div>
                    <div className="col-8 text-center" style={{ fontSize: '2rem', padding: '1rem', fontWeight: 'bold' }}>
                        Lynn's Projects
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
