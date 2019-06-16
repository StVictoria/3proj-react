import React from 'react';
import {Link} from 'react-router-dom';

class HeaderUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: null,
            basket: {
                count: 0
            }
        }
    }
    componentDidMount(){
        fetch('/api/basket.json').
            then(response=>{
                return response.json();
            }).
            then(data=>{
                this.setState({
                    basket: data
                });
            });
    }
    render(){
        return(
            <div className="header-user-basket">
                {/* {this.state.user == null ? <div className='login'>Войти</div> : <User info={this.state.user}/>} */}
                {this.state.user == null ? <Link to='/auth'className='login'>Войти</Link> : ''}
                <Link to='/basket' className='basket'>Корзина({this.state.basket.count})</Link>
            </div>
        )
    }
}

export default HeaderUser;