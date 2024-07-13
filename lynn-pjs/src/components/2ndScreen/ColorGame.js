import React from 'react';
import Header from '../allScreen/header';
import ShowNavbar from '../allScreen/menu';
import { Container } from 'react-bootstrap';
import MainGame from './MainGame';

const ColorGame = () => {
    
    return (
        <div>
            <ShowNavbar/>
            <Header title="Color Game pj"/>
            <div className='main-content col-lg height-100 bg-light'>
               <MainGame/> 
            </div>
        </div>
    )
}

export default ColorGame;