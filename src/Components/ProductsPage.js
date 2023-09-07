import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar></SearchBar>
            <ProductTable></ProductTable>
            <ProductRow product={jsonData}></ProductRow>
        </div>
    )
}

export default ProductsPage