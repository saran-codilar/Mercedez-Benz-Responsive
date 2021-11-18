import React, { Component } from 'react'
import Image from './benz1.svg';
import Image1 from './benz2.svg';
import Image2 from './search.png';
import './header.css';
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a href="image"><img src={Image} alt="image" className="image" /></a>
                    <a href="image1"><img src={Image1} alt="image" className="image1" /></a>
                </div>
                <div className="item" >
                    <a href="#company" className="items">Company</a>
                    <a href="#vehicles" className="items">Vehicles</a>
                    <a href="#design" className="items">Design</a>
                    <a href="#innovation" className="items">Innovation</a>
                    <a href="#museum  history" className="items">Museum  History</a>
                    <a href="#sports" className="items">Sports</a>
                    <a href="#events" className="items">Events</a>
                    <a href="#lifestyle" className="items">Lifestyle</a>

                </div>
                <div className="search">
                    <a href="search"><img src={Image2} alt="image" className="image2" /></a>
                </div>
                <div className="toprightcorner">
                    <div className="ib">
                        <span className="i">i</span>
                    </div>
                    <a href="#provider" className="provider"> Provider/Privacy Statement </a>
                    <a href="#deutsch" className="deu"> Deutsch </a>
                </div>
            </div>
        )
    }
}
