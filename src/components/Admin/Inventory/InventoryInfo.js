import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function InventoryInfo({path}) {
    
    const {totalCost, sales} = useSelector(state => state.budgets)
    const history = useHistory();
    return (
        <div className="InventoryInfo">
            <div className='budgets'>
                <div className="totalCost budgetItem">
                    <h4>Costo Total: </h4><span>$ {totalCost}</span>
                </div>
                <div className='sales budgetItem'>
                    <h4>Ventas Total: </h4><span>$ {sales}</span>
                </div>
                <div className="profitBudgets budgetItem">
                    <h4>Ganancia: </h4><span>$ {sales - totalCost}</span>
                </div>
            </div>
            <div className="inventoryButtons">
                <button onClick={() => {
                    history.push(`${path}/add-product`)
                }}>Agregar Producto</button>
                <button onClick={() => {
                    history.push(`${path}/categories`)
                }}>Categorías</button>
            </div>
        </div>
    )
}

export default InventoryInfo 
