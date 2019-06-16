import React from 'react';
import HeaderNav from './header/HeaderNav';
import HeaderUser from './header/HeaderUser';

class Header extends React.Component{
    render(){
        return(
            <header>
                <HeaderNav />
                <HeaderUser />
            </header>
        )
    }
}

export default Header;