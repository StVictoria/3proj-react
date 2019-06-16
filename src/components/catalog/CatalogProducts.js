import React from 'react';
import CatalogProductItem from './CatalogProductItem';

class CatalogProducts extends React.Component{
    render(){
        return(
            <div className='catalog-products'>
                {this.props.products.length > 0 && this.props.products.map(item=>
                    <CatalogProductItem name={item.name} price={item.price} src={item.src}/>
                )}
            </div>
        )
    }
}

export default CatalogProducts;