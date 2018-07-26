import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
       
       <div className="logo">
            
            <Link to='/'>LOILTY CO.</Link> 

        </div>

        <nav>
            <ul>
                <li className='first'>
                <Link to='/playerstats'>Player Stats</Link>
                </li>
                <li>
                    <Link to='/teamstats'>Team Stats</Link>
                </li>
                <li>
                    <Link to='/salary'>Salary</Link>
                </li>
                <li className='last'>
                <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
       
      </header>
    );
  }
}

export default Header;
