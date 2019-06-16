import React from 'react';

class CatalogProductItem extends React.Component{
    render(){
        return(
            <div className='catalog-products-item'>
                {this.props.name}
                {this.props.price}
                {this.props.src}
            </div>
        )
    }
}

export default CatalogProductItem;