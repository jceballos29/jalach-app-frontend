import React, { useEffect, useState } from 'react'
import '../../css/Admin/Inventory.css'
import Product from './Inventory/Product';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InventoryInfo from './Inventory/InventoryInfo';
import ProductRegister from './Inventory/ProductRegister';

import { useSelector } from 'react-redux';
import CategoryRegister from './Inventory/CategoryRegister';

// const product = {code: '77015698', name: 'Pilsen', category: 'Cervezas', cost: '1600', price:'4000', stock:'30'}

function Inventory() {
    
    const {path} = useRouteMatch();
    const {products} = useSelector((state) => state.products);
    const {company} = useSelector((state) => state.auth);
    const [productsList, setProductsList] = useState()

    useEffect(() => {
        if(products){
            setProductsList(
                products.map( product => (<Product key={product.code} product={product} rut={company.rut}/>))
            );
        }
    }, [products, company])
    
    return (
        <div className="Inventory">

            <div className="ProductContainer">
                <div className="inventoryTable">
                    <div className="headerTable">
                        <h4>Código</h4>
                        <h4>Nombre</h4>
                        <h4>Existencias</h4>
                        <h4>Categoría</h4>
                        <h4>Costo</h4>
                        <h4>Precio</h4>
                    </div>
                    <div className="contentTable">
                        {productsList}
                    </div>
                </div>
            </div>
            <div className="InventoryOptions">
                <Switch>
                    <Route path={`${path}/categories`}>
                        <CategoryRegister path={path}/>
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <ProductRegister path={path}/>
                    </Route>
                    <Route path={path}>
                        <InventoryInfo path={path}/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Inventory
