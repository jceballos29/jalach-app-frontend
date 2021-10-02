import React from 'react'
import { useHistory } from 'react-router-dom';

function InventoryInfo({path}) {
    
    const history = useHistory();
    return (
        <div className="InventoryInfo">
                <div className="totalCost">
                    <h4>Costo Total: </h4><span>$ </span>
                </div>
                <div className="profitBudgets">
                    <h4>Ganancia Presupuestada: </h4><span>$ </span>
                </div>
                <div className="inventoryButtons">
                    <button onClick={() => {
                        history.push(`${path}/add-product`)
                    }}>Agregar Producto</button>
                    <button>Reabastecer</button>
                    <button>Reiniciar</button>
                </div>
            </div>
    )
}

export default InventoryInfo 
