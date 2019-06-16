import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../common/Logo';

class HeaderNav extends React.Component{
    render(){
        return(
            <nav>
                <Logo />
                <div className='nav-box'>
                    <Link to='/catalog/women'>Женское</Link>
                    <Link to='/catalog/men'>Мужское</Link>
                    <Link to='/catalog/children'>Детское</Link>
                    <Link to='/catalog/news'>Новинки</Link>
                    <Link to='/catalog/about'>О нас</Link>
                </div>
            </nav>
        )
    }
}

export default HeaderNav;