import React from 'react'
import '../../css/Admin/Inventory.css'
import Product from './Inventory/Product';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InventoryInfo from './Inventory/InventoryInfo';
import ProductRegister from './Inventory/ProductRegister';

const product = {code: '77015698', name: 'Pilsen', amount: '30', category: 'Cervezas', cost: '1600', price:'4000'}

function Inventory() {
    
    const {path} = useRouteMatch();
    
    
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
                        <h4>Cantidad</h4>
                    </div>
                    <div className="contentTable">
                        <Product product={product}/>
                    </div>
                </div>
            </div>
            <div className="InventoryOptions">
                <Switch>
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
