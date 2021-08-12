import React from 'react';
import {Link } from 'react-router-dom';

import { AreaHeader } from './styled';


function Header(){
    return(
       <AreaHeader>
       <div className="conteiner">
           <div className="logo">
               logomarca   
           </div>
        <nav>
            <ul>

                <li> <Link to='/home'> inicio</Link> </li>     
                <li><Link to='/config'>configurações </Link></li>
                <li> <Link to='/logout'>sair</Link></li>
                

            </ul>
        </nav>

       </div>

       </AreaHeader>

       
    )
}

export default Header;
