import React from 'react';

class CatalogHeader extends React.Component{
    render(){
        return(
            <div className='catalog-header'>
                <h1>{this.props.name}</h1>
                <p className='catalog-header-descr'>{this.props.descr}</p>
            </div>
        )
    }
}

export default CatalogHeader;