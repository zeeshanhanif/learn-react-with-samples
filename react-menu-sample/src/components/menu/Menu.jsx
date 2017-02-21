import React, { Component } from 'react';
import Link from '../link/Link'
import './Menu.css';
//const menu = require('../../menu.json');
import menu from '../../menu.json';

class Menu extends Component {

  render() {
    /*let menu = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Contact us"
    ];*/
    return (
        <div>
            {
                menu.map((v,i)=>{
                    return <div key={i}><Link label={v}/></div>
                })
            }
        </div>
    );
  }
}

export default Menu;
