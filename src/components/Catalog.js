import React from 'react';
import CatalogHeader from './catalog/CatalogHeader';
import CatalogFilters from './catalog/CatalogFilters';
import CatalogProducts from './catalog/CatalogProducts';
import CatalogPagination from './catalog/CatalogPagination';

class Catalog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "name": null,
            "descr": null,
            "filters": [],
            "products": [],
            "pagination": null
        }
    }
    componentDidMount(){
        fetch('/api/catalog.json').
            then(response=>{return response.json()}).
            then(data=>{
                this.setState({
                    name: data.name,
                    descr: data.descr,
                    filters: data.filters,
                    products: data.products,
                    pagination: data.page
                })
                console.log(data)
        })
    }
    render(){
        return(
            <main className='catalog'>
                <CatalogHeader name={this.state.name} descr={this.state.descr}/>
                <CatalogFilters filters={this.state.filters}/>
                <CatalogProducts products={this.state.products}/>
                <CatalogPagination pagination={this.state.pagination}/>
            </main>
        )
    }
}

export default Catalog;